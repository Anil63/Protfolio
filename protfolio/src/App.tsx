import "./App.css";
import Header from "./Components/Common/Header";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Footer from "./Components/Common/Footer";

// var FileSaver = require('file-saver');

//    var ResumeFile = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
// FileSaver.saveAs(blob, "./img/Resume.pdf");

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header/>
        <Home/>
      
   {/* <Routes>
    <Route path="" element={<ResumeFile/>} />
   </Routes> */}
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
