import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Projects />
    </div>
  );
}

export default App;
