import React from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
function App() {
  return (
    <div className="text-black bg-[#f1dfb8d3]">
      <Navbar />
      <QuoteBox />
    </div>
  );
}

export default App;
