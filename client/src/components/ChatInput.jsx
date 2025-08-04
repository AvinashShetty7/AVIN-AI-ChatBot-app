
import React, { useState, useRef } from "react";
import axios from "axios";
import '../App.css'

function ChatInput({ onResponse,mode }) {
  const [input, setInput] = useState("");
  const recognitionRef = useRef(null);


  // for speech recognization
  const startListening = () => {
    
    if (!recognitionRef.current) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = "en-US";
      recognitionRef.current.interimResults = false;


      recognitionRef.current.onresult = async (event) => {
        const text = event.results[0][0].transcript;
        onResponse(prev => {
          const updated = [...prev];
          updated.pop(); //removes listenig
          return [...updated,{ name: text, from: "user" }];
        });

        onResponse(prev => [...prev, { name: '...', from: 'bot' }]);
        try {
          const res = await axios.post("http://localhost:5000/api/wit/message", {
            message: text,
          });


          onResponse(prev => {
            const updated = [...prev];
            updated.pop(); // remove typing
            console.log(res.data);


            return [...updated, { name: res.data, from: "bot" }];
          });
        } catch (err) {
          console.error("Error sending message:", err);
        }

      };
    }
    onResponse(prev => [...prev, { name: 'Listening', from: 'user' }]);
    recognitionRef.current.start();
   


  };

  // for message type 

  const handleSend = async () => {
    if (input.length == 0)
      return;
    setInput("");
    onResponse(prev => ([...prev, { name: input, from: "user" }]));
    onResponse(prev => [...prev, { name: '...', from: 'bot' }]);    //code for ... animation in bot message

    try {
      const res = await axios.post("http://localhost:5000/api/wit/message", {
        message: input,
      });

      onResponse(prev => {
        const updated = [...prev];
        updated.pop(); // remove typing
        console.log(res.data);
        return [...updated, { name: res.data, from: "bot" }];
      });
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };
  const handleKeyPress=(e)=>{
    if(e.key=="Enter")
       handleSend(); 

  }

  return (

    <div className="chat-input" style={{ backgroundColor: mode=='dark' ? '#1e1e1e ' : 'white',color: mode=='dark' ? '#fff ' : 'black'}}>

      <button style={{ backgroundColor: mode=='dark' ? '#0d6efd' : 'white'}} onClick={startListening}>🎙️</button>

      <input style={{ backgroundColor: mode=='dark' ? '#1e1e1e ' : 'white',color: mode=='dark' ? '#fff ' : 'black'}}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message"
        onKeyDown={handleKeyPress}

      />
      <button className='send' onClick={handleSend}><i className="bi bi-send-fill"></i></button>
    </div>

  );
}

export default ChatInput;
