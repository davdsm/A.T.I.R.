import React, { useState } from "react";
import Intro from "./../components/intro";
import MediaPipe from "./../components/mediapipe";

const Homepage = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="App">
      <Intro show={loading} />
      <MediaPipe />
    </div>
  );
};

export default Homepage;
