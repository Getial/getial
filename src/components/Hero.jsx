import React, { useState } from "react";
import "../styles/hero.css";

export default function Hero() {
  const [showDescription, setShowDescription] = useState(false);

  const isShowDescription = showDescription ? "active" : "";

  const textBtn = isShowDescription ? "Resumen" : "Mas sobre mi";
  return (
    <section className="hero">
      <h1>Hola, soy Felipe Getial</h1>
      <p className={`subtitle ${isShowDescription}`}>
        Colombiano de 24 años, apasionado por el desarrollo{" "}
        <span>Fullstack</span> con mayor fluides en el area{" "}
        <span>Frontend</span>
      </p>
      <p className={`description ${isShowDescription}`}>
        Como tecnólogo en Mecatrónica, empecé con programación de
        microcontroladores y PLC para proyectos de Mecatrónica. Mi interés se
        inclina hacia el desarrollo web frontend, donde he trabajado con
        tecnologías como{" "}
        <span>
          HTML, CSS, Javascript, React, React Native, VueJS y Bootstrap.
        </span>{" "}
        Además, he ampliado mis habilidades al backend con{" "}
        <span>Python (Django) y Node.js (Express) </span> para dar mayor
        funcionalidad a mis proyectos. Mi enfoque se centra en convertir líneas
        de código en resultados visuales impactantes.
      </p>
      <button onClick={() => setShowDescription(!showDescription)}>
        {textBtn}
      </button>
    </section>
  );
}
