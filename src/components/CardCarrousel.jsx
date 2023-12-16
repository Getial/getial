import React, { useRef, useEffect } from "react";
import "../styles/cardCarrousel.css";
import { habilitys } from "../utils/habilitys";

export default function CardCarrousel({ isInView }) {
  const containerRef = useRef(null);

  const handleScrollAnimation = () => {
    const container = containerRef.current;

    if (container) {
      const scrollAmount = 50;
      const scrollDuration = 500;

      let startTime;
      let startScrollLeft;
      let startScrollRight;

      function animateScroll(time) {
        if (!startTime) {
          startScrollLeft = container.scrollLeft;
          startTime = time;
        }

        if (startScrollLeft > 0) return;
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / scrollDuration, 1);
        const newScrollLeft = startScrollLeft + progress * scrollAmount;
        container.scrollLeft = newScrollLeft;

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          // Reiniciar startTime para futuras animaciones
          startTime = null;
          requestAnimationFrame(animateScrollBack);

          // Programar el reinicio de la animación
          isInView &&
            setTimeout(() => {
              console.log("entro al timeout");
              requestAnimationFrame(animateScroll);
            }, 2000); // Esperar 1 segundo antes de reiniciar
        }
      }

      function animateScrollBack(time) {
        if (!startTime) {
          startScrollRight = container.scrollLeft;
          startTime = time;
        }

        const elapsed = time - startTime;
        const progress = Math.min(elapsed / scrollDuration, 1);

        const newScrollLeft = startScrollRight - progress * scrollAmount;
        container.scrollLeft = newScrollLeft;

        if (progress < 1) {
          requestAnimationFrame(animateScrollBack);
        } else {
          // Reiniciar startTime para futuras animaciones
          startTime = null;
        }
      }
      requestAnimationFrame(animateScroll);
    }
  };

  isInView && handleScrollAnimation();

  return (
    <div className="card-carousel" ref={containerRef}>
      {habilitys.map((item, index) => (
        <div className="box" key={index}>
          <div className="card">
            <img src={item.image} alt={item.title} />
            <h2 className="titleCard">{item.title}</h2>
            <p className="textCard">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
