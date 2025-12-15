import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import TestPage from "./Pages/Testpages";
import HomeLogin from "./Pages/HomeLogin";
import Dashboard from "./Pages/Dashboard";
import AttemptDetails from "./Pages/Attemptdetails";
import Attempts from "./Pages/Attempts";
import Signup from "./Pages/Signup";
import Mentorship from "./Pages/Mentorship";

export default function App(){
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ padding: 20 }}>
        <Routes>
        
          <Route path="/" element={<HomeLogin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/tests/:testId" element={<TestPage/>} />
          <Route path="/attempts" element={<Attempts/>} />
          <Route path="/attempts/:attemptId" element={<AttemptDetails/>} />
          <Route path="/mentorship" element={<Mentorship/>}/>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}
