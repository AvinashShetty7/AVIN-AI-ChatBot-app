
import React from 'react'
import '../index.css';
import ReactMarkdown from "react-markdown";

export default function Searchresult(props) {
  const response = props.item.name[0].def;
  return (
    <div style={{ minWidth:'750px',backgroundColor: props.mode=='dark' ? '#212121 ' : 'white'}} >
    <div>
        <ReactMarkdown>{response}</ReactMarkdown>
    </div>
    <div className='searchimg' style={{display:'flex'}}> </div>
    </div>
  )
}

// export default function Searchresult(props) {
//   return (
//      <div class="searchresult" style={{ minWidth:'750px',backgroundColor: props.mode=='dark' ? '#212121 ' : 'white'}}>
//       <h4 style={{marginBottom:'15px'}}>💡 Quick insight :</h4>
//     <p>{props.item.name[0].def}</p>
//     <div className='searchimg' style={{display:'flex'}}> 
//           <img src={props.item.name[0].img==undefined? props.item.name[3].img:props.item.name[0].img} alt="" />
//           <img src={props.item.name[1].img==undefined? props.item.name[4].img:props.item.name[1].img} alt="" />
//           <img src={props.item.name[2].img==undefined? props.item.name[3].img:props.item.name[2].img} alt="" />

//     </div>
//     <hr/>
//       <h4>🌐 I searched for you—check these resources:</h4>

//       {props.item.name.map((item, index) => (
//           <div class="resultcontainer" key={index} style={{  backgroundColor: props.mode=='dark' ? '#212121': 'white', Color: props.mode=='dark' ? 'red' : '#1e1e1e '  }}>
//             👉 <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a>
//             <p style={{color: props.mode=='dark' ? '#ffffffff' : '#212121'}}>{item.snippet}</p>
//           </div>
//         ))}
//     </div>
  

//   )
// }



 // const textblock=props.item.name[0].def.match(/###([\s\S]*?)```/g);
  // const textblock=props.item.name[0].def
  // const CodeBlocks = props.item.name[0].def.match(/```(java|cpp|python|javascript|csharp|rust)([\s\S]*?)```/g);
  //          let cleanCode="";

  //           if (CodeBlocks) {
  //             CodeBlocks.forEach((block, index) => {
  //               cleanCode = block.replace(/```(java|cpp|python|javascript|csharp|rust)|```/g, "").trim();
  //               console.log(`Code Example ${index + 1}:\n`, cleanCode);
  //             });
  //           }


    // const sections = response.split(/---/).map(block => {
      //   return {
      //     headline: (block.match(/^### (.*)/m) || [])[1],
      //     subheadline: (block.match(/^#### (.*)/m) || [])[1],
      //     code: (block.match(/```java([\s\S]*?)```/) || [])[1],
      //     output: (block.match(/\*\*Output:\*\*([\s\S]*?)(---|$)/) || [])[1],
      //     text: block
      //   };
      // });

    // console.log(sections[3].headline);

     {/* {sections.map(sec => {
         return (  <div><h5>{sec.headline}</h5>
                  <h1>{sec.subheadline}</h1>
                  <pre style={{backgroundColor: props.mode=='dark' ? '#171717' : '#fcf8f9'}} >{sec.code}</pre>
                  <p>{sec.output}</p>
                  <p>{sec.text}</p>
                  </div> 
                  )
        })} */}