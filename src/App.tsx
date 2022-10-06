import React from "react";

import "./App.css";
import Header from "./Components/Common/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>home</h1>} />
          <Route path="/Service" element={<h1>Service</h1>} />
          <Route path="/About" element={<h1>About</h1>} />
          <Route path="/Contect" element={<h1>Contect</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
