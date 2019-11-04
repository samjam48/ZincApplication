import React from "react";
import ImageUploader from "react-images-upload";

function Upload({ pictures, setPictures }) {
  const onDrop = picture => {
    setPictures(pictures.concat(picture));
  };

  return (
    <ImageUploader
      withIcon={true}
      buttonText="Choose images"
      onChange={onDrop.bind(this)}
      imgExtension={[".jpg", ".gif", ".png", ".gif"]}
      maxFileSize={5242880}
    />
  );
}

export default Upload;
