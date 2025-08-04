import React from 'react'
import '../index.css'
export default function Navbar(props) {
  return (
    
     <nav className="navbar" style={{ backgroundColor: props.mode=='dark' ? '#1e1e1e ' : 'white',color: props.mode=='dark' ? '#fff ' : 'black'}}>
      <div className="navbar-brand" style={{color: props.mode=='dark' ? '#fff ' : 'black'}} ><img src="/l.png"></img> A-VIN</div>
        <div className="form-check form-switch">
          <input  onClick={() => props.setDarkMode(prev => !prev)} className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"/>
          <label className="form-check-label" htmlFor="switchCheckDefault">{props.mode=='light'?'DARK THEME':'LIGHT THEME'}</label>
        </div>


       {/* <button className='togglebutton' onClick={() => props.setDarkMode(prev => !prev)}>
        <i  style={{backgroundColor: props.mode=='dark' ? '#1e1e1e ' : '#1e1e1e',color:props.mode=='dark' ?'black':'white'}} className="bi bi-toggle-on"></i>
      </button> */}
    </nav>
  )
}
