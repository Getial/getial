import React from "react";
import "../styles/projectComponent.css";

export default function ProjectComponent({ title, description, imageUrl }) {
  return (
    <div className="project">
      <h4>{title}</h4>
      <div>
        <div>
          <p>{description}</p>
          <div className="btnsDesktop">
            <button>Ver Proyecto</button>
            <button>Ver Codigo</button>
          </div>
        </div>
        <img src={imageUrl} />
      </div>
      <div className="btnsMobile">
        <button>Ver Proyecto</button>
        <button>Ver Codigo</button>
      </div>
    </div>
  );
}
