import React from "react"
import './App.css';
import Info from "./components/Info";
import About from "./components/About";
import Interessts from "./components/Interests";
import Footer from "./components/Footer";

const App = () => {

  return (
    <div className="App">
      <div className="container">
        <Info />
        <About />
        <Interessts />
        <Footer />
      </div>
    </div>
  );
};

export default App
