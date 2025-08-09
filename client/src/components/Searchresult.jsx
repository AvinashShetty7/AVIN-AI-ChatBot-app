// import React from 'react'
// import '../index.css';


// export default function Searchresult(props) {
//   return (
//     <div class="searchresult" style={{backgroundColor: props.mode=='dark' ? '#1e1e1e ' : 'white',border: props.mode=='dark' ? ' 1px solid #2c2e30ff' : ' 1px solid white'}}>
//       {props.item.name.map((item, index) => (
//           <div class="resultcontainer" key={index} style={{ backgroundColor: props.mode=='dark' ? '#1e1e1e ' : 'white',border: props.mode=='dark' ? ' 1px solid #2c2e30ff' : ' 1px solid white', Color: props.mode=='dark' ? 'red' : '#1e1e1e '  }}>
//             <h3 style={{color: props.mode=='dark' ? ' white' : '#1e1e1e'}}>{item.title}</h3>
//             <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a>
//             <p style={{color: props.mode=='dark' ? '#ffffffff' : '#1e1e1e'}}>{item.snippet}</p>
//           </div>
//         ))}
//     </div>
//   )
// }

import React from 'react'
import '../index.css';


export default function Searchresult(props) {
  return (
    // <div class="searchresult" style={{backgroundColor: props.mode=='dark' ? '#1e1e1e ' : 'white',border: props.mode=='dark' ? ' 1px solid #2c2e30ff' : ' 1px solid white'}}>
    // <p>{props.item.name[0].def}</p>

    //   {props.item.name.map((item, index) => (
    //       <div class="resultcontainer" key={index} style={{ backgroundColor: props.mode=='dark' ? '#1e1e1e ' : 'white',border: props.mode=='dark' ? ' 1px solid #2c2e30ff' : ' 1px solid white', Color: props.mode=='dark' ? 'red' : '#1e1e1e '  }}>
    //         <h3 style={{color: props.mode=='dark' ? ' white' : '#1e1e1e'}}>{item.title}</h3>
            
    //             <img src={item.img} alt="" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}/>
    //         <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a>
    //         <p style={{color: props.mode=='dark' ? '#ffffffff' : '#1e1e1e'}}>{item.snippet}</p>
    //       </div>
    //     ))}
    // </div>
     <div class="searchresult" style={{ minWidth:'750px',backgroundColor: props.mode=='dark' ? '#1e1e1e ' : 'white'}}>
      <h4 style={{marginBottom:'15px'}}>💡 Quick insight :</h4>
    <p>{props.item.name[0].def}</p>
    <div className='searchimg' style={{display:'flex'}}> 
          <img src={props.item.name[0].img==undefined? props.item.name[3].img:props.item.name[0].img} alt="" />
          <img src={props.item.name[1].img==undefined? props.item.name[4].img:props.item.name[1].img} alt="" />
          <img src={props.item.name[2].img==undefined? props.item.name[3].img:props.item.name[2].img} alt="" />

    </div>
    <hr/>
      <h4>🌐 I searched for you—check these resources:</h4>

      {props.item.name.map((item, index) => (
          <div class="resultcontainer" key={index} style={{  backgroundColor: props.mode=='dark' ? '#1e1e1e ' : 'white', Color: props.mode=='dark' ? 'red' : '#1e1e1e '  }}>
            {/* <h3 style={{color: props.mode=='dark' ? ' white' : '#1e1e1e'}}>{item.title}</h3> */}
                {/* <img src={item.img} alt="" style={{width: '100%', maxHeight: '200px', objectFit: 'cover' }}/> */}
            👉 <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a>
            <p style={{color: props.mode=='dark' ? '#ffffffff' : '#1e1e1e'}}>{item.snippet}</p>
          </div>
        ))}
    </div>
  

  )
}
