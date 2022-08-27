import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Project/Navbar";
import Home from "./Project/Home";
import About from "./Project/About";
import Feature from "./Project/Feature";
import Course from "./Project/Course";
import Offer from "./Project/Offer";
import Contact from "./Project/Contact";

function App(props) {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar showSidebar={() => setSidebar(!sidebar)} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/course" element={<Course />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
