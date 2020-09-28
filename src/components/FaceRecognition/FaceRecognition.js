import React from "react";
import "./FaceRecognition.css";

function FaceRecognition({ imageURL, box }) {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputImage"
          src={imageURL}
          alt=""
          width="500px"
          height="auto"
        />
        <div
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
          className="bounding-box"
        ></div>
      </div>
    </div>
  );
}

export default FaceRecognition;
