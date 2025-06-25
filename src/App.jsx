import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import "./App.css";
import Navigation from "./components/navigation";
import Homepage from "./pages/Homepage";
import Footer from "./components/footer";
import Project from "./pages/Project";

function App() {
  return (
    <div className="bg-[#0F1A24] min-h-screen pb-8">
      <Navigation />
      <Routes>
        <Route path="/" index element={<Homepage />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
