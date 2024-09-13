import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Presentation from "./Pages/Presentation";
import MainLayout from "./Layouts/MainLayout";
import Mentions from "./Pages/Mentions";
import Testimonies from "./Pages/Testimonies";
import Partage from "./Pages/Partage";
const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/testimonies" element={<Testimonies />} />

          <Route path="/mentions" element={<Mentions />} />
          <Route path="/partage" element={<Partage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
