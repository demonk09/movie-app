import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Reg() {
  let[post,setPost]=useState([])
  let[data,setData]=useState([])
  let[sf,setSf]=useState("")
  let[fv,setFv]=useState("")
  useEffect(()=>{
    axios.get("https://randomuser.me/api/?results=500").then((res)=>{
      setPost(res.data.results)
      setData(res.data.results)
      // console.log(res.data.results.name);
    })
  },[])

  let del=(i)=>{
    post.splice(i,1)
    setPost([...post])

  }
  let fun2=(e)=>{
    setFv(e.target.value)
    setSf("")
    setPost(data)
  }
  let fun=(e)=>{
    setSf(e.target.value)
    let reg=new RegExp(e.target.value)
    setPost(data.filter((item)=>reg.test(item.login[fv])))
    console.log(data.filter((item)=>reg.test(item.location[fv])));
  }
  let fun1=(e)=>{

  }
  return (
    <div className="con-reg">
      <select onChange={fun2}>
    <option selected disabled>SELECT OPTION</option>
    <option value="email">EMAIL</option>
    <option value="username">USERNAME</option>
    <option value="postcode">POSTCODE</option>
      </select>
      <input className='input-text' type="text" placeholder='ENTER DATA' onChange={fun} value={sf} />
      {
        post.length>0 && <table border={1}>
          <tr>
            <th colSpan={2}>name</th>
            <th rowSpan={2}>Gender</th>
            <th rowSpan={2}>Email</th>
            <th rowSpan={2}>username</th>
            <th onClick={()=>fun1()} rowSpan={2}>country</th>
            <th onClick={fun1('postcode')} rowSpan={2}>postcode</th>
            <th rowSpan={2}>Profile </th>
            <th rowSpan={2}>delete profile</th>
          </tr>
          <tr>
            <th>first</th>
            <th>last</th>
          </tr>
          {
            post.map((item,index)=>{
              return(
                <tr>
                  
                  <td>{item.name.first}</td>
                  <td>{item.name.last}</td>
                  <td>{item.gender}</td>
                  <td>{item.email}</td>
                  <td>{item.login.username}</td>
                  <td>{item.location.country}</td>
                  <td>{item.location.postcode}</td>
                  <td><img src={item.picture.thumbnail} alt=""/></td>
                  <td><button className='btn-del' onClick={()=>del(index)}>DELETE</button></td>
                 
                </tr>
              )
            })
          }
        </table>
      }
    </div>
  )
}

export default Reg