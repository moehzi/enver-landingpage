import React from "react";
import "./App.css";
import { Navbar } from "./components";
import { Header, WhyENVER, Services, Portofolio, Contact } from "./containers";
import bgLinear from "./assets/gradient/rectangle-blue.png";

function App() {
  return (
    <div className="App">
      <img src={bgLinear} alt="bg-linear" className="absolute" />
      <Navbar />
      <Header />
      <WhyENVER />
      <Services />
      <Portofolio />
      <Contact />
    </div>
  );
}

export default App;
