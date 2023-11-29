import React, { useState, useEffect } from "react";
import "../styles/hero.css";

export default function Hero() {
  const [showDescription, setShowDescription] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const isShowDescription = showDescription ? "active" : "";
  const textBtn = isShowDescription ? "Resumen" : "Mas sobre mi";

  useEffect(() => {
    const moveDiv = () => {
      const newX = Math.random() * window.innerWidth -200;
      const newY = Math.random() * window.innerHeight - 200;

      setPosition({ x: newX, y: newY });
    };

    // Mover el div cada 2 segundos (o ajusta según tus necesidades)
    const intervalId = setInterval(moveDiv, 2000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);


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
      <div className="bgimage"></div>
      <div className="bgazul" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
    </section>
  );
}
