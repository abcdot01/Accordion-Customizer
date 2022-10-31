// 
import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Label from './components/Label';
import NoteState from "./context/accordionState/NoteState";
import Home from "./components/Home";

function App() {
  return (
    <NoteState>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} excat />
        <Route path='/label-builder' element={<Label />} />
      </Routes>
    </BrowserRouter>
    </NoteState>
  );
}

export default App;