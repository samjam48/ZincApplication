import React from "react";

import contentData from "../utils/contentData";

const Project = props => {
  const id = props.match.params.id;

  const [projectData] = contentData.filter(project => project.id == id);

  return (
    <section className="project">
      <h1 className="mb-4">{projectData.title}</h1>
      <img
        className="project__image"
        src={projectData.image}
        alt={projectData.title + " logo"}
      />
      <p className="lead">{projectData.description}</p>
    </section>
  );
};

export default Project;
