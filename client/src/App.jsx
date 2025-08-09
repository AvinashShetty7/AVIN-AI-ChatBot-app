
// client/src/App.js

import React, {useRef, useState,useEffect } from "react";
import ChatInput from "./components/ChatInput";
import './App.css'
import Textchange from "./components/Textchange";
import News from "./components/News";
import Navbar from "./components/Navbar";
import Searchresult from "./components/Searchresult";
import Weatherreport from "./components/Weatherreport";
import GreetingScreen from "./components/greetingpage";

function App() {
  const [response, setResponse] = useState([]);
   const [darkMode, setDarkMode] = useState(false);
  let mode = darkMode ? 'dark' : 'light';
   const containerRef = useRef(null);
  const lastMessageRef = useRef(null);
  const [showGreeting, setShowGreeting] = useState(true);

   useEffect(() => {
    if (lastMessageRef.current && containerRef.current) {
      containerRef.current.scrollTop = lastMessageRef.current.offsetTop;
    }
  }, [response]);

 

  
  return (
    <>
    <div  style={{ backgroundColor: mode=='dark' ? '#1e1e1e ' : 'white'}}>
       
      <Navbar setDarkMode={setDarkMode} mode={mode}/>
      <div className="body_of_the_app">
        <Textchange mode={mode} />
        <div className=" msg">
          <div  ref={containerRef} className='container' style={{ backgroundColor: mode=='dark' ? '#1e1e1e ' : 'white'}} >
            {showGreeting?<GreetingScreen mode={mode}/>:""}
            {response.map((item, index) => {
              return <div  ref={index === response.length - 2 ? lastMessageRef : null} id='message' className={item.from == 'user' ? mode=='dark'?'messagedarkuser':'messagelightuser' :mode=='dark'?'messagedarkbot':'messagelightbot'} key={index} >
                 {/* {item.from === 'bot' &&<label style={{fontSize:'27px'}}>♾️</label> } */}
                {typeof item.name === 'string' ? (

                 item.name.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                ))):  (
                        (()=>{
                            if (item.name[0].tag === 'news') {
                            return <News item={item} mode={mode} />
                          } else if(item.name[0].tag === 'searchresults'){
                            return <Searchresult item={item} mode={mode} />
                          }else if(item.name[0].tag === 'weather'){
                              return <Weatherreport item={item} mode={mode}/>
                          }
                      })()
                      )}
              </div>
            })}
        
            <ChatInput onResponse={setResponse} mode={mode} setShowGreeting={setShowGreeting}/>

          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
// (item.name[0].tag=='news')?<News item={item} mode={mode}/>:<Searchresult item={item} mode={mode}/>