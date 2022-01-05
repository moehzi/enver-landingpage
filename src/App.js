import React from "react";
import "./App.css";
import { Navbar } from "./components";
import { Header } from "./containers";
import bgLinear from "./assets/rectangle.png";

function App() {
  return (
    <div className="App">
      <img src={bgLinear} alt="bg-linear" className="absolute" />
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
