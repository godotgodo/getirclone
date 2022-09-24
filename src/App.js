import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/routes/Navbar';
import GetirYemek from './components/routes/GetirYemek';
import Getir from './components/routes/Getir';
import GetirBuyuk from './components/routes/GetirBuyuk';
import GetirSu from './components/routes/GetirSu';
import GetirCarsi from './components/routes/GetirCarsi';

function App() {
  return (
    <div className='bg-getirgray w-full min-h-screen h-full'>
      {/* <Navbar/> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Getir />} />
          <Route path="/yemek" element={<GetirYemek />} />
          <Route path="/buyuk" element={<GetirBuyuk />} />
          <Route path="/su" element={<GetirSu />} />
          <Route path="/carsi" element={<GetirCarsi />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
