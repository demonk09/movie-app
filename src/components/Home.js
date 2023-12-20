import React, { useEffect, useState } from 'react'
import "./Home.css"

function Home() {
  let a=["https://i.postimg.cc/C16JCdtD/pexels-photo-1781710.jpg","https://i.postimg.cc/7ZmBPBVm/pexels-photo-1045298.jpg",
  "https://i.postimg.cc/FK07g6Bx/pexels-photo-3810141.jpg","https://i.postimg.cc/DZBsLDSM/pexels-photo-1090972.jpg",
  "https://i.postimg.cc/5yfJd7pb/pexels-photo-2457317.jpg","https://i.postimg.cc/q7ZQdzLR/pexels-photo-4239886.jpg"]

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
    let iid=setInterval(fun,500)
    return ()=>clearInterval(iid)
  },[])
  
  return (<>
    <div className="con"><h1 style={styles}>HOME</h1></div>
   
    </>
  )
}

export default Home