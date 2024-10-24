import React from "react";
import Header from "./Pages/00-Header/Header";
import Footer from "./Pages/01-Footer/Footer";
import Home from "./Pages/02-Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from "./Pages/03-About/Aboutus";
import Gallery from "./Pages/04-Gallery/Gallery";
import Contactus from "./Pages/05-Contact/Contactus";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
