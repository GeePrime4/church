import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Layout from './Pages/Layout';
import Details from './components/Details'
import About from './Pages/About';
import Sermons from './Pages/Sermons';
import Galleries from './Pages/Galleries';
import Contact from './Pages/Contact';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route element={<About />} path='/about' />
          <Route element={<Sermons />} path='/sermons' />          
          <Route element={<Galleries />} path='/galleries' />          
          <Route element={<Contact />} path='/contact' />          
          <Route path="/details" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
