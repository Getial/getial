import React, { useRef, useEffect } from "react";
import "./styles/App.css";
import MenuDesktop from "./components/MenuDesktop";
import MenuMobile from "./components/MenuMobile";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Habilitys from "./components/Habilitys";

function App() {
  const handleInView = (componentName, isInView) => {
    console.log(`${componentName} está en pantalla: ${isInView}`);
    // Aquí puedes realizar acciones específicas para cada componente en pantalla
  };

  return (
    <>
      <MenuDesktop />
      <MenuMobile />
      <Hero onInView={(isInView) => handleInView("Hero", isInView)} />
      <Projects onInView={(isInView) => handleInView("Proyectos", isInView)} />
      <Habilitys
        onInView={(isInView) => handleInView("Habilidades", isInView)}
      />
    </>
  );
}

export default App;
