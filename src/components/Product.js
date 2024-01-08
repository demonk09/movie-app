import React, { useEffect, useState } from 'react'
import "./card.css"
import axios from 'axios'
import "./../App.css"


// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';

export default function Product() {

  let [da, setData] = useState([])
  let [post, setPost] = useState([])
  let [count,setCount]=useState(1)

  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=${count}`)
      .then((res) => {

        setData(res.data.results)
        setPost(res.data.results)
      })
  }, [count])

  const SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

    let funnext = () => {
      setCount((prevCount) => prevCount + 1);
    };
    
    let funprev = () => {
      if (count > 1) {
        setCount((prevCount) => prevCount - 1);
      }
    };


  const handleSearch = async (e) => {
    e.preventDefault();

    if (searchTerm && searchTerm !== "") {
      try {
        const response = await axios.get(SEARCH_API + searchTerm);
        setData(response.data.results);
        setSearchTerm('');
      } catch (error) {
        console.error('Error fetching search results:', error);
      }

    } else {
      window.location.reload();
    }
  };
 

  return (
    <div className='con1'>
       
      <div className='con-con'>


        <form onSubmit={handleSearch}>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search movies..."
          />

          <button onClick={handleSearch} >Search</button>
          
        </form>
      </div>
      {
        da.map((item) => (
          <div key={item.id} className='card-mov'>
            <div className='movie-con'>
              <div className='pimg'>
                <img src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
              </div>
             <div>
             </div>
              <div className='on-hover'>
                {item.overview}
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
      <div className='button-group'>
      <button onClick={funprev}>prev</button>
      <button onClick={funnext}>next</button>          
      </div>

    </div>

  )
}
