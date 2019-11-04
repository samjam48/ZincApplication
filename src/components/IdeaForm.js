import React from "react";
import Upload from "./Upload";

const IdeaForm = () => {
  const [pictures, setPictures] = React.useState([]);

  React.useEffect(() => {
    console.log({ pictures });
  }, [pictures]);

  return (
    <form className="idea-form">
      <label for="idea-name">Idea Name</label>
      <input
        className="idea-form__text-input"
        id="idea-name"
        name="name"
        type="text"
      ></input>
      <br />
      <label for="description">Description</label>
      <input
        className="idea-form__text-input"
        id="description"
        name="description"
        type="text"
      ></input>
      <Upload pictures={pictures} setPictures={setPictures} />
    </form>
  );
};

export default IdeaForm;
