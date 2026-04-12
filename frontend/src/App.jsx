import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import NoteDetailPage from './pages/NoteDetailPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 -z-10 
          bg-[radial-gradient(120%_120%_at_50%_20%,#140c08_30%,#d4a37320_70%,transparent_100%)]" 
        />
        
        <Navbar />

        <Routes>  
          <Route path='/' element={<HomePage />} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='/note/:id' element={<NoteDetailPage />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default App;