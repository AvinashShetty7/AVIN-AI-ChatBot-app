import React from 'react'

export default function Weatherreport(props) {
  return (
    <div>
        <h5 class="header">Currently {props.item.name[0].cur_celsius}°-{props.item.name[0].cur_condition}</h5>
        <p> {props.item.name[0].location.loc}, {props.item.name[0].location.country}</p>
      <div className="eachdayweather" >

        {props.item.name.map((item) => (
                <div className='singledayweather' style={{backgroundColor: props.mode=='dark' ? '#212121 ' : 'white',border: props.mode=='dark' ? ' 1px solid #2c2e30ff' : ' 1px solid white'}}>
                <p style={{ width: '100%', maxHeight: '200px',marginRight:'70px'  }}>
                    {
                        (()=>{
                            if(item.condition=='Heavy rain')
                                return '⛈️'
                            else if(item.condition=='Partly Cloudy ')
                                return '⛅'
                            else if(item.condition=='Patchy rain nearby')
                                return '🌦️'
                            else if(item.condition=='Sunny')
                                return '☀️'
                            else if(item.condition=='Moderate rain')
                                return '☔'
                            else if(item.condition=='Cloudy ')
                                return '☁️';
                            
                        })()
                    }
                    <span style={{marginRight:'80px' ,fontSize:'16px'}}>{item.dayname}</span>
                     <span style={{marginRight:'80px' }}>{item.high}° {item.low}°</span>
                    <span style={{marginRight:'40px' ,fontSize:'16px',fontFamily: "Helvetica Neue"}}>{item.condition} </span>
                </p>
               
                
                </div>
        ))}
      </div>
    </div>
  )
}
