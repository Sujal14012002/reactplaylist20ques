import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [name, setname] = useState("");
  // const [email,setemail] = useState("");
  // const [password, setpassword] = useState("");

  const[element,setelement]=useState([])

  
  function handlefn(event){
    if(event.target.checked){
      setelement([...element,event.target.id])
    }else{
      setelement([element.filter((val)=>val!=event.target.id)])
    }
 
    
  }
  
  return (
    <>

<div>handle checkbox in react js </div>
<input onChange={handlefn} id="php" type='checkbox' value={element} />
<label htmlFor='php'>php</label>
<br/>
<input id="html" onChange={handlefn} type='checkbox' />
<label htmlFor='html'>html</label>
<br/>

<input id="node" onChange={handlefn} type='checkbox' />
<label htmlFor='node'>node</label>
<br/>

<input id="c++"  onChange={handlefn}type='checkbox' />
<label htmlFor='c++'>c++</label>

<h1>{element.toString()}</h1>






   </>
  )
}

export default App
