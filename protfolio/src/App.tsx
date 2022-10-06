import "./App.css";
import Header from "./Components/Common/Header";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Footer from "./Components/Common/Footer";


function App() {
  return (
    <div >
      <BrowserRouter>
        <Header/>
        <Home/>
      
   
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
