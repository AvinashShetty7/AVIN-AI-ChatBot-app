import React, { useState, useEffect } from 'react';
import '../App.css'

const Textchange = (props) => {
  const messages = [
    "Welcome to A-VIN!",
    "Time for a smart chat ⏰",
    "Check the weather now ☀️",
    "Latest headlines are ready 📰",
    "What can I help you with today?"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % messages.length); // loop back to 0
      }, 5000); // change every 5 seconds (adjust as needed)
      
    return () => clearInterval(interval); // cleanup on unmount
  }, []);
 
  return (
    <div className='tag_lines' style={{ backgroundColor: props.mode=='dark' ? ' black' : '#f9f9f9'}}>
          {/* <h1  style={{color: props.mode=='dark' ? '#fff ' : 'black'}}>{messages[index]}</h1> */}
          <p style={{ color: props.mode=='dark' ? ' #fff ' : 'black'}}>New chat</p>
    </div>
  );
};

export default Textchange;
