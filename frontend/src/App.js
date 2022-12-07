import { useState } from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import InfoPaper from './Components/InfoPaper/InfoPaper';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Pages/Home';
import AddEntity from './Pages/AddEntity';
import GetEntity from './Pages/GetEntity';

const App = () => {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            {/* Change to the component you are developing */}
            <Route path="/" element={<Home />} />
            <Route path="Add" element={<AddEntity />} />
            <Route path="Find" element={<GetEntity />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
