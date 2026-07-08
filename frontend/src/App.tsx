import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Pessoas from "./pages/Pessoas";
import Transacoes from "./pages/Transacoes";

import Navbar from "./components/Navbar";


function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route 
          path="/" 
          element={<Dashboard />} 
        />


        <Route 
          path="/pessoas" 
          element={<Pessoas />} 
        />


        <Route 
          path="/transacoes" 
          element={<Transacoes />} 
        />

      </Routes>

    </BrowserRouter>

  );
}


export default App;