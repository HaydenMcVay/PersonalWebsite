import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import DugoutDynasty from "./pages/DugoutDynasty";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dugout-dynasty" element={<DugoutDynasty />} />
      </Routes>
    </BrowserRouter>
  );
}
