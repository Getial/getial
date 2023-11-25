import { useState } from "react";
import "./styles/App.css";
import MenuDesktop from "./components/MenuDesktop";
import MenuMobile from "./components/MenuMobile";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Habilitys from "./components/Habilitys";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MenuDesktop />
      <MenuMobile />
      <Hero />
      <Projects />
      <Habilitys />
    </>
  );
}

export default App;
