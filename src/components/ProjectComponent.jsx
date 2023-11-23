import React from "react";
import "../styles/projectComponent.css";

export default function ProjectComponent({ title, description, imageUrl }) {
  return (
    <div className="project">
      <h4 className="projectTitle">{title}</h4>
      <div className="projectDescription">
        <div>
          <p>{description}</p>
          <div className="btns btnsDesktop">
            <button>Ver Proyecto</button>
            <button>Ver Codigo</button>
          </div>
        </div>
        <img src={imageUrl} />
      </div>
      <div className="btns btnsMobile">
        <button>Ver Proyecto</button>
        <button>Ver Codigo</button>
      </div>
    </div>
  );
}
