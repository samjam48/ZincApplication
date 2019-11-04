import React from "react";

import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Demo Portfolio Manager</h1>

    <p className="lead">
      This is a sample application built to provide a basic discussion forum and
      portfolio manager for <a href="https://www.zinc.vc/">Zinc VC</a> Founder
      ideas, using <a href="https://reactjs.org">React.js</a>
    </p>
    <p className="lead">
      Users can create a login, search through Zinc portfolio ideas or add their
      own idea.
    </p>
  </div>
);

export default Hero;
