import React from 'react'
import { useEffect,useState } from "react";

export default function Foot() {
  let [time,setTime]=useState(new Date())
  let fun =()=>{
    setTime(new Date())
  }
  useEffect(()=>{
    setInterval(fun,1000)
  },[])
  return (
    <div className="Foot">
      {time.toLocaleTimeString('it-IT')}
    </div>
  )
}
