import React from "react";

const Video = () => {
  return (
    <div className="w-50 container my-40 mx-auto">
      <h1 className="text-7xl text-center my-10">Our Beautiful Bangladesh</h1>
      <iframe
        width="80%"
        height="500"
        src="https://www.youtube.com/embed/fN21oOdni_c?autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
