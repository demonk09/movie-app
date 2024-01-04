// import React from 'react';
import "./Home.css"
import { Link, Outlet } from 'react-router-dom';

function About() {
  return (
    <div style={{"display":"flex"}}>
    
      <nav className='con-side-view'>
        <Link to="/about/edit">Edit</Link>
        <Link to="/about/extra">Extra</Link>
        <Link to="/about/new">New</Link>
       
      </nav>
      <Outlet />
      <div className="new-con-con">
      ABOUT
      </div>
    
      </div>
  );
}

export default About;