import React from "react";
import ImageUploader from "react-images-upload";

function Upload() {
  const [pictures, setPictures] = React.useState([]);

  const onDrop = picture => {
    setPictures(pictures.concat(picture));
  };

  React.useEffect(() => {
    console.log({ pictures });
  }, [pictures]);

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
