import React, { useRef, useEffect } from "react";
import { Element } from "react-scroll";
import "../styles/contact.css";

export default function Contact({ onInView }) {
  const contactRef = useRef(null);
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
    <Element name="Contacto" className="contact" ref={contactRef}>
      <h3 className="title">Contacto</h3>
      <p className="cta">
        Conéctate conmigo en LinkedIn, revisa mi código en GitHub y envíame un
        correo electrónico para discutir cómo puedo fortalecer tu equipo. ¡Listo
        para crear juntos!
      </p>
      <div className="logos">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/brayan-felipe-getial-5768b1213/"
        >
          <img src="./assets/logos/linkedin.png" alt="logo linkedin" />
        </a>
        <a target="_blank" href="https://github.com/Getial">
          <img src="./assets/logos/github.png" alt="logo github" />
        </a>
        <a target="_blank" href="mailto:bfgetial@gmail.com">
          <img src="./assets/logos/mail.png" alt="logo mail" />
        </a>
      </div>
      <div className="info">
        <h4>Informacion General</h4>
        <div>
          <p>Nombre</p>
          <p>Brayan Felipe Getial Ayala</p>
        </div>
        <div>
          <p>Edad</p>
          <p>24 años</p>
        </div>
        <div>
          <p>Reside en</p>
          <p>Pasto-Nariño Colombia</p>
        </div>
      </div>
    </Element>
  );
}
