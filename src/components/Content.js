import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contentData from "../utils/contentData";

class Content extends Component {
  render() {
    return (
      <div className="next-steps my-5">
        <h2 className="my-5 text-center">What can I do next?</h2>
        <Row className="d-flex justify-content-between">
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
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Content;
