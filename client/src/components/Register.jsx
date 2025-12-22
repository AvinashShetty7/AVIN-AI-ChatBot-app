// import React, { useState } from 'react'


// export default function Register() {
//     const[Name,setName]=useState('')
//     const[Username,setUsername]=useState('')
//     const[Password,setPassword]=useState('')
//     const handleclick=()=>{
//         console.log("hi");
//     }

//   return (
//     <div>
//         <h1>Login</h1>
//         <label>Name</label>
//         <input type='text' value={Name} onChange={(e)=>setName(e.target.value)}/>
//         <label>Username</label>
//         <input type='text' value={Username} onChange={(e)=>setUsername(e.target.value)}/>
//         <label>Password</label>
//         <input type='text' value={Password} onChange={(e)=>setPassword(e.target.value)}/>
//         <button onClick={handleclick}>Login</button>
//     </div>
//   )
// }

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      // Make the API call to your backend route
      const res = await axios.post('/api/generate-content', { prompt });
      setResponse(res.data.content);
    } catch (error) {
      console.error('Error fetching response:', error);
      setResponse('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Gemini MERN App</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt..."
      />
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? 'Generating...' : 'Generate'}
      </button>
      <div>
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;
