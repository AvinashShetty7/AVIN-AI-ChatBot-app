import React from 'react'
import '../index.css';


export default function Searchresult(props) {
  return (
    <div class="searchresult" style={{backgroundColor: props.mode=='dark' ? '#1e1e1e ' : 'white',border: props.mode=='dark' ? ' 1px solid #2c2e30ff' : ' 1px solid white'}}>
      {props.item.name.map((item, index) => (
          <div class="resultcontainer" key={index} style={{ backgroundColor: props.mode=='dark' ? '#1e1e1e ' : 'white',border: props.mode=='dark' ? ' 1px solid #2c2e30ff' : ' 1px solid white', Color: props.mode=='dark' ? 'red' : '#1e1e1e '  }}>
            <h3 style={{color: props.mode=='dark' ? ' white' : '#1e1e1e'}}>{item.title}</h3>
            <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a>
            <p style={{color: props.mode=='dark' ? '#ffffffff' : '#1e1e1e'}}>{item.snippet}</p>
          </div>
        ))}
    </div>
  )
}
