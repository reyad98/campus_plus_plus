import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Admission from "./Pages/Admission/Admission";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Navbar/Navbar";
import Notice from "./Pages/Navbar/Notice";
import Topnav from "./Pages/Navbar/Topnav";
import NoticePage from "./Pages/NoticePage/NoticePage";
import ScrollToTop from "./Pages/Scroll/ScrollToTop";
import Teachers from "./Pages/Teachers/Teachers";


function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop></ScrollToTop>
        <Topnav />
        <Navbar />
        <Notice />
        <Routes>
          <Route path="/notice" element={<NoticePage/>} />
          <Route path="admission/applynow" element={<Admission></Admission> } />
          <Route path="administration/teachers" element={<Teachers></Teachers> } />

          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
