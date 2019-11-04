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
        className="idea-form__input"
        id="idea-name"
        name="name"
        type="text"
      ></input>

      <br />

      <label for="description">Description</label>
      <input
        className="idea-form__input text_input"
        id="description"
        name="description"
        type="text"
      ></input>

      <br />

      <label for="category">Category</label>
      <select className="idea-form__input" id="category" name="category">
        <option value="care">Care</option>
        <option value="health">Health</option>
        <option value="information">Information</option>
        <option value="mobility">Mobility</option>
        <option value="social">Social</option>
        <option value="tech">Technology</option>
        <option value="wellbeing">Wellbeing</option>
      </select>

      <br />

      <label for="logo">Logo</label>
      <input
        className="idea-form__input"
        id="logo"
        name="logo"
        type="file"
      ></input>

      <hr />
      <label>Additional Files</label>
      <Upload pictures={pictures} setPictures={setPictures} />
    </form>
  );
};

export default IdeaForm;
