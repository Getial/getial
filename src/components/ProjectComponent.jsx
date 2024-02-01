import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/projectComponent.css";
import { useLang } from "../context/LangContext";
import { getTexts } from "../utils/textos";

export default function ProjectComponent({ project, left }) {
  const { id, title, type, description, image, codeUrl } = project;
  const isLeft = left ? "left" : "";
  const [texts, setTexts] = useState("");
  const { lang } = useLang();

  // usseEffect para traer los textos dependiendo del idioma
  useEffect(() => {
    const texts = getTexts(lang);
    setTexts(texts.projectsComponent);
  }, [lang]);

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
                {texts?.btn1}
              </a>
            </button>
            <Link className="link" to={`/getial/detailProject/${id}`}>
              {texts?.btn2}
            </Link>
          </div>
        </div>
        <img src={image} alt={`image project ${title}`} />
      </div>
      <div className="btns btnsMobile">
        <button>
          <a href={codeUrl} target="_blank">
            {texts?.btn1}
          </a>
        </button>
        <Link className="link" to={`/getial/detailProject/${id}`}>
          {texts?.btn2}
        </Link>
      </div>
    </div>
  );
}
