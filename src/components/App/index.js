import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState, useEffect } from 'react';
import axios from 'axios';

import  Header from "../Header"
import HomePage from "../HomePage";
import TelaFinal from "../TelaAssentos";
import TelaAssentos from "../TelaAssentos";
import TelaHorario from "../TelaHorario";
import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sessoes/:idFilme" element={<TelaFinal />} />
      <Route path="/" element={<TelaAssentos />} />
      <Route path="/" element={<TelaHorario />} />
      <Route path="/" element={<BrowserRouter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;