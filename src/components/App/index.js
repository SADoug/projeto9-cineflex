import { BrowserRouter, Routes, Route } from "react-router-dom";

import  Header from "../Header"
import HomePage from "../HomePage";
import TelaFinal from "../TelaFinal";
import TelaAssentos from "../TelaAssentos";
import TelaHorario from "../TelaHorario";
import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sessoes/:idFilme" element={<TelaHorario />} />
      <Route path="/assentos/:idSessao" element={<TelaAssentos />} />
      <Route path="/sucesso" element={<TelaFinal />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App;