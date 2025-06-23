import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import "./App.css";
import Navigation from "./components/navigation";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="bg-[#0F1A24] min-h-screen">
      <Navigation />
      <Routes>
        <Route path="/" index element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
