import React, { Fragment } from "react";

import Content from "../components/Content";

const Project = props => {
  console.log(props);
  console.log(props.match.params.id);
  return (
    <Fragment>
      <div>Project deets</div>
    </Fragment>
  );
};

export default Project;
