import React, { useRef, useEffect, useState } from "react";
import "./styles/App.css";
import MenuDesktop from "./components/MenuDesktop";
import MenuMobile from "./components/MenuMobile";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Habilitys from "./components/Habilitys";

function App() {
  const [componentActive, setComponentActive] = useState("Home");
  const handleInView = (componentName, isInView) => {
    console.log(`${componentName} está en pantalla: ${isInView}`);
    // Aquí puedes realizar acciones específicas para cada componente en pantalla
    isInView && setComponentActive(componentName);
  };

  return (
    <>
      <MenuDesktop componentActive={componentActive} />
      <MenuMobile componentActive={componentActive} />
      <Hero onInView={(isInView) => handleInView("Home", isInView)} />
      <Projects onInView={(isInView) => handleInView("Proyectos", isInView)} />
      <Habilitys
        onInView={(isInView) => handleInView("Habilidades", isInView)}
      />
    </>
  );
}

export default App;
