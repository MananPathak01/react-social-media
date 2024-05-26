import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import Navbar from './Pages/Navbar';
import {Provider} from 'react-redux'
import { store } from './store';

function App() {
  return (
    <>
      <Provider store = {store}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
