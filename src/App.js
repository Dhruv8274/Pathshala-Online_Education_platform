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
import Twelthsubject from "./Components/Twelthsubject";
import TwelthBookpdf from "./Components/TwelthBookpdf";
import TenthBookpdf from "./Components/TenthBookpdf";
import Tenthsubject from "./Components/Tenthsubject";
import NinthBookpdf from "./Components/NinthBookpdf";
import NinthSubject from "./Components/NinthSubject";
import Physics from "./Components/Physics";
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
        <Route path="/Twelthsubject"element={<Twelthsubject/>}/>
        <Route path="/TwelthBookpdf"element={<TwelthBookpdf/>}/>
        <Route path="/Tenthsubject"element={<Tenthsubject/>}/>
        <Route path="/TenthBookpdf"element={<TenthBookpdf/>}/>
        <Route path="/NinthBookpdf"element={<NinthBookpdf/>}/>
        <Route path="/NinthSubject"element={<NinthSubject/>}/>
        <Route Path="/Physics"element={<Physics/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
