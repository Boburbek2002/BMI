import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Resurses from "../pages/Resurses";
import Thread1 from "../pages/Thread1";
import Thread2 from "../pages/Thread2";
import Thread3 from "../pages/Thread3";
import Thread4 from "../pages/Thread4";
import Thread5 from "../pages/Thread5";
import Thread6 from "../pages/Thread6";
import '../App.css'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/thread1" element={<Thread1 />} />
      <Route path="/thread2" element={<Thread2 />} />
      <Route path="/thread3" element={<Thread3 />} />
      <Route path="/thread4" element={<Thread4 />} />
      <Route path="/thread5" element={<Thread5 />} />
      <Route path="/thread6" element={<Thread6 />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/resurses" element={<Resurses />} />
    </Routes>
  );
};

export default Routers;
