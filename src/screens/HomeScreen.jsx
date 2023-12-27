import React, { useState } from "react";
import MenuDesktop from "../components/MenuDesktop";
import MenuMobile from "../components/MenuMobile";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Habilitys from "../components/Habilitys";
import Contact from "../components/Contact";

function HomeScreen() {
  const [componentActive, setComponentActive] = useState("Home");
  const handleInView = (componentName, isInView) => {
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
      <Contact onInView={(isInView) => handleInView("Contacto", isInView)} />
    </>
  );
}

export default HomeScreen;
