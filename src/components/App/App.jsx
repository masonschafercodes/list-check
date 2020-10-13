import React from "react";
import "./App.css";

import Navbar from "../Navbar/Navbar";
import Lister from "../Lister/Lister";

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="intro-text">
        <h2>Find your List Collection and Click through to <span className="highlight-color">Explore</span></h2>

        <Lister
          list_name="2020 Christmas Crew"
          list_cover_image="https://image.freepik.com/free-vector/doodle-christmas-holiday-card-with-white-placeholder_78458-256.jpg"
        />
      </div>
    </div>
  );
};

export default App;
