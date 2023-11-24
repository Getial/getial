import React from "react";
import "../styles/projectComponent.css";

export default function ProjectComponent({
  title,
  type,
  description,
  imageUrl,
  left,
}) {
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
