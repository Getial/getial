import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/projectComponent.css";

export default function ProjectComponent({ project, left }) {
  const { id, title, type, description, image, codeUrl } = project;

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
                Ir al Codigo
              </a>
            </button>
            <Link className="link" to={`/getial/detailProject/${id}`}>
              Ver más
            </Link>
          </div>
        </div>
        <img src={image} alt={`image project ${title}`} />
      </div>
      <div className="btns btnsMobile">
        <button>
          <a href={codeUrl} target="_blank">
            Ir al Codigo
          </a>
        </button>
        <Link className="link" to={`/getial/detailProject/${id}`}>
          Ver más
        </Link>
      </div>
    </div>
  );
}
