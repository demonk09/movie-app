import React, { useEffect, useState } from 'react'
import "./card.css"
import axios from 'axios'


// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';

export default function Product() {

  let[da,setData]=useState([])
  let [sf,setSf]=useState()
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c`)
    .then((res)=>{
    
     setData(res.data.results)
    })
  },[])

  // const SEARCH_API =
  // 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';
  let fun=(e)=>{
    setSf(e.target.value)
    // let reg=new RegExp(e.target.value)
    // setData(da+SEARCH_API)
    console.log(da);
  }

  return (
    <div className='con1'>
      <div className='con-con'>
      <input type="text" name="" id="" onChange={fun} value={sf} placeholder='Enter Movie title'/>
      <button >Search</button>
      </div>
          {
            da.map((item) => (
              <div key={item.id} className='card-mov'>
                <div className='movie-con'>
                <div className='pimg'>
                <img src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
                </div>
                <div className='title'>
                  {item.title}
                </div>
                <div className='pop'>
                popularity:- {item.popularity}
                </div>
              </div>
              </div>
            ))
          }


      </div>
   
  )
}
