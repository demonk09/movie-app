import React, { useEffect, useState } from 'react'
import "./Home.css"

function Home() {
  let a=["https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1620503374956-c942862f0372?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://i.postimg.cc/FK07g6Bx/pexels-photo-3810141.jpg",
  "https://i.postimg.cc/DZBsLDSM/pexels-photo-1090972.jpg",
  "https://i.postimg.cc/5yfJd7pb/pexels-photo-2457317.jpg",
  "https://i.postimg.cc/jdKf0YDp/pexels-photo-4604195.jpg"]

  let [i,setI]=useState(0)
  let fun=()=>{
    setI((i)=>(i+1)%6)
  }

    const backgroundImageUrl =`url(${a[i]})`;
  
    const styles = {
      backgroundImage: backgroundImageUrl,
      backgroundSize: 'cover', // You can customize other background properties here
      // Add more styles as needed
    };


  useEffect(()=>{
    let iid=setInterval(fun,100)
    return ()=>clearInterval(iid)
  },[])
  
  return (<>
    <div className="con"><h1 style={styles}>

    मयूर</h1></div>
   
    </>
  )
}

export default Home