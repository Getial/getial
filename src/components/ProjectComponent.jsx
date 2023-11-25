import React from "react";
import "../styles/projectComponent.css";

export default function ProjectComponent({ project }) {
  const { title, type, description, image, left, codeUrl } = project;

  const isLeft = left ? "left" : "";

  return (
    <div className="project">
      <h4 className="projectTitle">
        {title} <span>({type})</span>
      </h4>
      <div className={`projectDescription ${isLeft}`}>
        <div>
          <p>{description}</p>
          <div className="btns btnsDesktop">
            <button>
              <a href={codeUrl} target="_blank">
                Ver Codigo
              </a>
            </button>
            <button>Ver Proyecto</button>
          </div>
        </div>
        <img src={image} />
      </div>
      <div className="btns btnsMobile">
        <button>
          <a href={codeUrl} target="_blank">
            Ver Codigo
          </a>
        </button>
        <button>Ver Proyecto</button>
      </div>
    </div>
  );
}
