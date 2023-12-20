import { Link } from "react-router-dom";

import React from 'react'
import "./Nav.css"

export default function Nav() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/reg">REGISTER</Link>
        <Link to="/ct">CONTACT</Link>
    </nav>
  )
}
