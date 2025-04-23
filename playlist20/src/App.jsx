import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setname] = useState("");
  const [email,setemail] = useState("");
  const [password, setpassword] = useState("");

  
  return (
    <>

<div>controlled component</div>
<input value={name} placeholder='name'onChange={(e)=>setname(e.target.value)}/>
<input value={email} placeholder='email'onChange={(e)=>setemail(e.target.value)}/>
<input value={password} placeholder='password'onChange={(e)=>setpassword(e.target.value)}/>
<button onClick={()=>{
   setemail("")
   setpassword("")
   setname("")
}}>click</button>



<h1>{name}</h1>
<h1>{email}</h1>
<h1>{password}</h1>




   </>
  )
}

export default App
