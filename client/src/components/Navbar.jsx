import React from 'react'
import '../index.css'
export default function Navbar(props) {
  return (
    
     <nav className="navbar" style={{ backgroundColor: props.mode=='dark' ? '#1e1e1e ' : 'white',color: props.mode=='dark' ? '#fff ' : 'black'}}>
      <div className="navbar-brand" style={{color: props.mode=='dark' ? '#fff ' : 'black'}} >♾️ A-VIN</div>
      {/* <img src="/l.png"></img> */}
        <div className="form-check form-switch">
          <input  onClick={() => props.setDarkMode(prev => !prev)} className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"/>
          <label className="form-check-label" htmlFor="switchCheckDefault">{props.mode=='light'?'DARK THEME':'LIGHT THEME'}</label>
        </div>
    </nav>
  )
}
