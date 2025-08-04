// server/routes/wit.js
const express = require("express");
const axios = require("axios");
const router = express.Router();
// const fetch = require('node-fetch');
// const { htmlToText } = require('html-to-text');

const WIT_TOKEN = "Bearer SN6CN5NODM3BS3ZNK7YPT32WEZPG5U6F";

router.post("/message", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.get(`https://api.wit.ai/message`, {
      headers: {
        Authorization: WIT_TOKEN,
      },
      params: {
        q: message,
      },
    });
    const data = response.data;
    const intent = data.intents?.[0]?.name || null;  //to takes intent only
    const confidence = data.intents?.[0]?.confidence || 0;

    //  Decide response based on intent
    if (intent == "thank_you") {
      const replies = [
        "You're welcome!",
        "Happy to help! 😊",
        "Anytime!",
        "No problem at all.",
        "Glad I could assist!",
        "Always here for you.",
        "My pleasure!",
        "No worries, friend.",
        "You're very welcome!",
        "Thanks for the kind words!"
      ];
      const reply = replies[Math.floor(Math.random() * replies.length)];
      res.json(reply);

    } else if (intent == "goodbye") {
      const farewells = [
        "Goodbye! Take care. 👋",
        "See you later! 😊",
        "Thanks for chatting! Talk to you soon.",
        "Peace out ✌️",
        "Take care and stay awesome! 🌟",
        "Bye! Come back anytime.",
        "I'll be here if you need me again.",
        "See you next time! 🖖",
        "Logging off for now. Catch you later!",
        "Alright, talk soon. Stay safe! 🙌"
      ];
      const reply = farewells[Math.floor(Math.random() * farewells.length)];
      res.json(reply);

    }
    else if (intent == 'greet') {
      const greetings = [
        "Hey there! How can I help you today?",
        "Hello! What can I do for you?",
        "Hi! I'm ready to assist you.",
        "Hey! How’s it going?",
        "Greetings! Ask me anything.",
        "Yo! What’s up?",
        "Hello, friend! 👋",
        "Hi there! Need help with something?",
        "Hey assistant at your service 🤖",
        "Good to see you! 😊"
      ];
      const reply = greetings[Math.floor(Math.random() * greetings.length)];
      res.json(reply);

    }
    else if (intent == 'get_help') {
      const helpResponses = [
        "I’m here to help! You can ask me things like:\n- What's the weather in Chennai?\n- Translate 'hello' to Hindi\n- Tell me a fun fact\n- What's the time now?",
        "Sure! I can help with:\n- Translations 🌐\n- Weather info 🌤️\n- Fun facts 💡\nJust type your question!",
        "I'm your assistant. Ask me anything like:\n- “Translate goodbye to French”\n- “What’s the weather in Delhi?”\n- “Tell me a science fact”",
        "Need help? You got it! Just type your question and I’ll do my best to assist you 😊"
      ];
      const reply = helpResponses[Math.floor(Math.random() * helpResponses.length)];
      res.json(reply);

    }
    else if (intent == 'unknown') {
      const fallbackReplies = [
        "Hmm, I didn’t quite get that. Could you try rephrasing?",
        "Sorry, I’m not sure what you mean. Can you say it another way?",
        "I didn’t understand that. Want to ask something else?",
        "I might have missed that. Can you repeat it more clearly?",
        "Oops! That went over my head. Say it again?",
        "Can you please clarify? I want to help.",
        "That doesn’t make sense to me yet — try again?",
        "I’m still learning. Could you say it differently?",
        "Huh, that confused me too 😅 Want to try another way?",
        "Not sure what that means. Let’s try again?"
      ];
      const reply = fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)];
      res.json(reply);

    }
    else if (intent == 'get_weather') {

      const loc = data.entities?.['wit$location:location']?.[0]?.body || null
      console.log(loc);
      
      if (loc == null) {
        const reply = "please mention name of city"
        res.json(reply)
      }
      const weather = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=7d77a4a13c6146f9b0262609250607&days=3&q=${loc}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      weatherdata = weather.data
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const topthreedayreport= (weatherdata.forecast.forecastday || []).slice(0, 3).map(singledayreport => {
              const dateObj = new Date(singledayreport.date);
              const curdate = new Date();
                return {
                  tag:'weather',
                  cur_celsius:weatherdata.current.temp_c,
                  cur_condition:weatherdata.current.condition.text,
                  location:{
                    loc:weatherdata.location.name,
                    country:weatherdata.location.country

                  },
                  date: singledayreport.date,
                  dayname:(days[dateObj.getDay()]==days[curdate.getDay()])?'Today':days[dateObj.getDay()],
                  high: singledayreport.day.maxtemp_c,
                  low:singledayreport.day.mintemp_c,
                  condition: singledayreport.day.condition.text,
                }
              });
      
      res.json(topthreedayreport)


    }
    else if(intent == 'get_news'){
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];

       const  apikey = 'e1a29da8556a656ad57a48b98d32dd37';
       const loc = data.entities?.['wit$location:location']?.[0]?.body || null
        console.log(loc);
        if(loc==null){
        const url = 'https://gnews.io/api/v4/search?category=general&q=india&lang=en&max=5&apikey=' + apikey;
                // &from=2025-06-23T21:32:58.500Z&to=2025-07-25T21:32:58.500Z
              const news = await axios.get(`${url}`, {
                headers: {
                  'Content-Type': 'application/json'
                }
              });
              newsdata = news.data;
              const topFive = (newsdata.articles || []).slice(0, 5).map(article => ({
                  tag:'news',
                  title: article.title,
                  description: article.description,
                  image: article.image,
                  link: article.url,
                  source: article.source.name,
                  publishedAt: article.publishedAt
                }));
              // console.log(topFive);

              res.json(topFive);
        } else{
        const url = `https://gnews.io/api/v4/search?category=general&q=${loc}&lang=en&max=5&apikey=` + apikey;
        // &from=2025-06-23T21:32:58.500Z&to=2025-07-25T21:32:58.500Z
        
        const news = await axios.get(`${url}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      newsdata = news.data;
     console.log(newsdata);
     if(newsdata.totalArticles==0){
      res.json('currently unavilable')
     }
     
      const topFive = (newsdata.articles || []).slice(0, 5).map(article => ({
          tag:'news',
          title: article.title,
          description: article.description,
          image: article.image,
          link: article.url,
          source: article.source.name,
          publishedAt: article.publishedAt
        }));
 

      console.log(topFive);
      

      res.json(topFive);
        }
     
      

    }
    else if (intent=='search'){
      const apikey='AIzaSyBk53CuH3m4nwwQaCZttzYCVn2PjqsPrsU';
      const cx='b10e0014bfadd4f18'
      const query = message;// it is from message block to pass query to google search engine
      const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${apikey}&cx=${cx}`;
        const search = await axios.get(`${url}`, {
                headers: {
                  'Content-Type': 'application/json'
                }
              });
              searchitems=search.data;
              console.log(searchitems);

              const topFivesearch = (searchitems.items || []).slice(0, 5).map(items => ({
                tag:"searchresults",
                title:items.title,
                snippet: items.snippet,
                link: items.link,
               }));
              // console.log(topFivesearch);
              
               res.json(topFivesearch)
    }
    else if(intent == 'bot_identity'){
       const botidentity = [
        "Hi! I’m AVIN — your smart assistant.  I was created by Avinash to help you with daily info like time, weather, news, and more.  Ask me anything, and I’ll do my best to assist you!",
        "Hey there! I’m AVIN, a chatbot made by Avinash. I can tell you the time, weather, news, and more. Just ask!",
        "I am AVIN, your AI-powered assistant. Developed by Avinash, I’m here to provide real-time updates, helpful answers, and a smooth chat experience.",
        "I’m AVIN – an intelligent bot built by Avinash. I handle time, weather, headlines, and more using APIs and AI logic.",
        "My purpose is to keep you informed — whether it’s today’s weather, current time, or the latest news. Built by Avinash, for you."

      ];
      const reply = botidentity[Math.floor(Math.random() * botidentity.length)];
      res.json(reply);
    }
  
    else if (intent == 'get_date') {
      const today = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }).split(',')[0];
      reply = `Today's date is ${today}`
      res.json(reply)
    }
    else if (intent == 'get_time') {
      const now = new Date()
      const indiaTime = now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }).split(',')[1];
      reply = `Time is ${indiaTime}`
      res.json(reply)

    }
    else {
      let reply = "Sorry, I didn't understand.";
      res.json(reply);
    }

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Wit.ai request failed" });
  }
});

module.exports = router;


  // else if(intent == 'get_programming'){
  //     const URL1 = await axios.get(`https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=relevance&q=binarysearch java&site=stackoverflow`, {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });
  //     let pdata=URL1.data.items[0].question_id;
      
  //     const URL=await axios.get(`https://api.stackexchange.com/2.3/questions/${pdata}/answers?order=desc&sort=votes&site=stackoverflow&filter=withbody`,{
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });
  //     let data=URL.data;
  //     let data1=data.items[0].body;
  //     console.log(data.items[0].body);
  //     const cleanText = htmlToText(data1, {
  //       wordwrap: 130,
  //       selectors: [
  //         { selector: 'a', options: { ignoreHref: true } }
  //       ]
  //     });
  //     res.json(`${cleanText}`);

      
      
      
  //   }

  //news.org api
    // const Api_key='bfa49f6755a24bcea914a53476edf870';
      // const URL='https://newsapi.org/v2/everything?q='
      // //'tesla&from=2025-06-22&sortBy=publishedAt&apiKey='
      // const loc = data.entities?.['wit$location:location']?.[0]?.body || null
      // console.log(loc);

      // const news = await axios.get(`${URL}${loc}&language=en&from=2025-06-22&sortBy=publishedAt&apiKey=${Api_key}`, {
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // });
      // newsdata = news.data;
      // let newses="";
      // for(let i=0;i<5;i++){
      //   newses=newses+(i+1)+". "+newsdata.articles[i].title+"\n";
        
      // }
      // res.json(`HeadLines:`+`\n`+`   ${newses}`)
