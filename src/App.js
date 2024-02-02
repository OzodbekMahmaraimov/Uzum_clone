import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Abzor from './components/abzor/Abzor'
import Buyum from './components/buyumlar/Buyumlar'
import Loading from './components/loading/Loading'
import Footer from './components/footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home"  Component={Home} />
        <Route path="/abzor"  Component={Abzor} />
        <Route path="/buyumlar"  Component={Buyum} />
        <Route path="/loading"  Component={Loading} />
        <Route path="/footer"  Component={Footer} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
