import React, { useRef, useEffect, useState } from "react";
import { Element } from "react-scroll";
import "../styles/contact.css";

export default function Contact({ onInView }) {
  const [iconoSeleccionado, setIconoSeleccionado] = useState(null);
  const contactRef = useRef(null);

  //useEffect para animar aleatoriamente un icono
  useEffect(() => {
    // Función para aplicar la animación a un icono aleatorio
    const aplicarAnimacionAleatoria = () => {
      const iconos = document.querySelectorAll(".icono");
      const iconoAleatorio = iconos[Math.floor(Math.random() * iconos.length)];

      // Quitar la clase de animación de todos los iconos
      iconos.forEach((icono) => {
        icono.classList.remove("animacion-bounce");
      });

      // Agregar la clase de animación al icono aleatorio
      iconoAleatorio.classList.add("animacion-bounce");
    };

    // Aplicar la animación cada 3 segundos (ajusta según tus preferencias)
    const intervalo = setInterval(aplicarAnimacionAleatoria, 2000);

    // Limpieza del intervalo al desmontar el componente
    return () => clearInterval(intervalo);
  }, []);

  // useEffect para leer el scroll
  useEffect(() => {
    const handleScroll = () => {
      // Acciones cuando el componente está en pantalla
      if (contactRef.current) {
        const rect =
          contactRef.current.childBindings.domNode.getBoundingClientRect();
        const isInView = rect.top < 300 && rect.bottom >= 300;
        onInView(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Element name="Contacto" className="contact-container" ref={contactRef}>
      <div className="contact">
        <h3 className="title">Contacto</h3>
        <p className="cta">
          Conéctate conmigo en <span>LinkedIn</span>, revisa mi código en{" "}
          <span>GitHub</span> y envíame un <span>correo electrónico</span> para
          discutir cómo puedo fortalecer tu equipo. ¡Listo para crear juntos!
        </p>
        <div className="logos">
          <a
            className={`icono ${
              iconoSeleccionado === 1 ? "animacion-bounce" : ""
            }`}
            target="_blank"
            href="https://www.linkedin.com/in/brayan-felipe-getial-5768b1213/"
          >
            <img src="./assets/logos/linkedin.png" alt="logo linkedin" />
          </a>
          <a
            className={`icono ${
              iconoSeleccionado === 2 ? "animacion-bounce" : ""
            }`}
            target="_blank"
            href="https://github.com/Getial"
          >
            <img src="./assets/logos/github.png" alt="logo github" />
          </a>
          <a
            className={`icono ${
              iconoSeleccionado === 3 ? "animacion-bounce" : ""
            }`}
            target="_blank"
            href="mailto:bfgetial@gmail.com"
          >
            <img src="./assets/logos/mail.png" alt="logo mail" />
          </a>
        </div>
        <div className="info">
          <h4>Informacion General</h4>
          <div>
            <p>Nombre:</p>
            <p>Brayan Felipe Getial Ayala</p>
          </div>
          <div>
            <p>Edad:</p>
            <p>24 años</p>
          </div>
          <div>
            <p>Reside en:</p>
            <p>Pasto-Nariño Colombia</p>
          </div>
        </div>
      </div>
    </Element>
  );
}
