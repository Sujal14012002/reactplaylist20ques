import { useEffect, useState } from "react";

function Clock({color}){

    const[time,settime]=useState(0);
   useEffect(()=>{
    setInterval(()=>{
      settime(new Date().toLocaleTimeString())
    },1000)
   })
    return(
        <>
        <div style={{backgroundColor:"red", height:"50px",width:"150px", display:"flex", alignItems:"center", borderRadius:"5px", justifyContent:"center", color:color}}>{time}</div>
<div>color</div>

        
        </>
    )
}

export default Clock;