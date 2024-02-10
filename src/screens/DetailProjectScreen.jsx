import React, { useEffect, useState } from "react";
import { Form, useNavigate, useLoaderData } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { ArrowBack } from "@mui/icons-material";
// import { projects } from "../utils/projects";
import { useLang } from "../context/LangContext";
import { getTexts } from "../utils/textos";
import "../styles/projectDetail.css";

export async function loader({ params }) {
  const projectId = parseInt(params.projectId);
  return { projectId };
}

export default function DetailProjectScreen() {
  const { projectId } = useLoaderData();
  const [project, setProject] = useState();
  const [textsComponent, setTextsComponent] = useState();
  const { lang } = useLang();
  const navigate = useNavigate();

  useEffect(() => {
    const texts = getTexts(lang);
    const res = texts.projects.find((project) => project.id === projectId);
    setTextsComponent(texts.detailProject);
    setProject(res);
  }, [lang, projectId]);

  //useEffect para hacer scroll top
  useEffect(() => {
    const options = {
      duration: 0,
      smooth: true,
    };
    animateScroll.scrollToTop(options);
  }, []);

  return (
    <div className="projectDetail">
      <ArrowBack className="btn-back" onClick={() => navigate(-1)} />
      <h1>{project?.title}</h1>
      <div className="left">
        <img src={`.${project?.image}`} alt="image project" />
        <div className="btns">
          <button>
            <a href={project?.codeUrl} target="_blank">
              {textsComponent?.btnShowFrontend}
            </a>
          </button>
          {project?.demoUrl ? (
            <button>
              <a href={project?.demoUrl} target="_blank">
                {textsComponent?.btnTryDemo}
              </a>
            </button>
          ) : (
            <button>
              <a href={project?.backUrl} target="_blank">
                {textsComponent?.btnShowbackend}
              </a>
            </button>
          )}
        </div>
        <p className="copy">{project?.copy}</p>
      </div>
      <div className="right">
        <h2>{textsComponent?.characteristics}</h2>
        {project?.characteristics.map((item, index) => (
          <div key={index} className="characteristic">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
