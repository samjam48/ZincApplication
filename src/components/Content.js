import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contentData from "../utils/contentData";

class Content extends Component {
  render() {
    return (
      <div className="portfolio-page my-5">
        <h2 className="my-5 text-center">Active ideas</h2>
        <Row className="d-flex justify-content-between portfolio-projects">
          {contentData.map((col, i) => (
            <Col key={i} md={5} className="mb-4 project-card">
              <h6 className="mb-3">
                <a href={col.link}>
                  <FontAwesomeIcon icon="link" className="mr-2" />
                  {col.title}
                </a>
              </h6>
              <div className="project-card__content">
                <img
                  className="project-card__image"
                  src={col.image}
                  alt={col.title + " logo"}
                />
                <p className="project-card__description">{col.description}</p>
                <p className="project-card__description">
                  <a href={`/project/${col.id}`}>
                    <FontAwesomeIcon icon="link" className="mr-2" />
                    View Project
                  </a>
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Content;
