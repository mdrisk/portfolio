import React from "react";

const PictureDetail = ({ picture }) => {
  if (!picture) {
    return <div>Loading...</div>;
  }
  //
  // const pictureId = picture.id;
  // const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="col-md-12 padding-detail">
      <a target="_blank" href={picture.link}>
        <img
          className="img-fluid selector"
          src={picture.url}
          style={{ maxHeight: "400px" }}
        />
      </a>
    </div>
  );
};

export default PictureDetail;
