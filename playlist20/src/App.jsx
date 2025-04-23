import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [val, setval] = useState("anil")

  return (
    <>
<h2>get input field</h2>
<input value={val} onChange={(e)=>setval(e.target.value)}></input>
<h1>{val}</h1>
<button onClick={()=>{setval("")}}>click</button>
   </>
  )
}

export default App
