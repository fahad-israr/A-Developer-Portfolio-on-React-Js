import React from "react";
import ReactGA from 'react-ga';
import "react-vertical-timeline-component/style.min.css";
import "./App.css";
import Particle from "./components/Particle";
import Projects from "./components/Projects";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";

function App() {
  ReactGA.initialize('UA-146375117-1');
  ReactGA.pageview('/homepage');
  return (
    <div className="App">
      <Particle />
      <About />
      <Timeline />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
