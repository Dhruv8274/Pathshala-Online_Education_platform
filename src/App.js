import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import Maincard from "./Components/Maincard";
import Review from "./Components/Review";
import Bodycard from "./Components/Bodycard";
import Login3 from './Components/Login3';
import About from "./Components/About";
import Contactus from "./Components/Contactus";
import Cbse from './Components/Cbse';
import Icse from './Components/Icse';
import Register from './Components/Register';
import Explaination from './Components/Explaination';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./Components/Details";
import School from "./Components/School";
import Data from "./Components/Data";
import Quizzes from "./Components/Quizzes";
import Guide from "./Components/Guide";
import Previousyear from "./Components/Previousyear";
function App() {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Body /><School/><Explaination/><Details/> <Maincard/><Bodycard/><Data/><Review/></>} />
        <Route path="/about" element={<About />} />
        <Route path="/login2" element={<Login3/>} />
        <Route path="/contactus" element={<Contactus/>}/>
        <Route path="/icse" element={<Icse />} />
        <Route path="/cbse" element={<Cbse/>} />
        <Route path="/new_registration" element={<Register/>} />
        <Route path="/Quizzes" element={<Quizzes/>} />
        <Route path="/Guide" element={<Guide/>} />
        <Route path="/Previousyear"element={<Previousyear/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
