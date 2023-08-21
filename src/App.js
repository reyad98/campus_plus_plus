import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import News from "./Pages/Academic/News";
import ResultCard from "./Pages/Academic/ResultCard";
import AdminLogin from "./Pages/AdminLogin/AdminLogin";
import Admission from "./Pages/Admission/Admission";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Footer from "./Pages/Footer/Footer";
import Gallery from "./Pages/Gallary/Gallery";
import Achievement from "./Pages/Home/Achievement";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Navbar/Navbar";
import Notice from "./Pages/Navbar/Notice";
import Topnav from "./Pages/Navbar/Topnav";
import NoticePage from "./Pages/NoticePage/NoticePage";
import PrincipalMessage from "./Pages/PrincipalMessage/PrincipalMessage";
import PublicExamResult from "./Pages/Result/PublicExamResult";
import ScrollToTop from "./Pages/Scroll/ScrollToTop";
import Teachers from "./Pages/Teachers/Teachers";
import Transport from "./Pages/Transport/Transport";


function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop></ScrollToTop>
        <Topnav />
        <Navbar />
        <Notice />
        <Routes>
          <Route path="/login" element={<AdminLogin></AdminLogin>} />
          <Route path="/dashboard" element={  <DashBoard></DashBoard> } />

          <Route path="/about" element={<About></About>} />

          <Route path="/notice" element={<NoticePage/>} />
          <Route path="admission/applynow" element={<Admission></Admission> } />


          <Route path="/administration/principalmessage" element={<PrincipalMessage></PrincipalMessage> } />

          <Route path="/academic/publicexamresult" element={ <PublicExamResult></PublicExamResult>} />
          <Route path="/academic/latestnews" element={ <News></News> } />
          <Route path="/academic/resultcard" element={ <ResultCard></ResultCard> } />
          <Route path="/academic/achievement" element={ <Achievement></Achievement> } />

          <Route path="/administration/teachers" element={<Teachers></Teachers> } />
          <Route path="/transports" element={<Transport></Transport> } />

          <Route path="/gallery" element={<Gallery></Gallery> } />


          
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
