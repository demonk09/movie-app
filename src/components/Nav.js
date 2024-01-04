import { Link } from "react-router-dom";

import React from 'react'
import "./Nav.css"

export default function Nav() {
  return (
  
    <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/reg">REGISTER</Link>
        <Link to="/pro">PRODUCTS</Link>
    </nav>
  )
}
