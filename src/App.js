import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import New from './newComp/New';
import Edit from './newComp/Edit';
import Extra from './newComp/Extra';
import Foot from './components/Foot';
import Home from './components/Home';
import Reg from './components/Reg';
import Product from './components/Product';
import Your from './components/Your';

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
         

        <Route path="/about" element={<About />} >
            <Route path="/about/edit" element={<Edit />} />
            <Route path="/about/extra" element={<Extra />} />
            <Route path="/about/new" element={<New />} />
        </Route>


        <Route path="/login" element={<Your />} />
        <Route path="/pro" element={<Product />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="*" element={<Home />}/>
      </Routes>

      <Foot />
    </BrowserRouter>
  );
}