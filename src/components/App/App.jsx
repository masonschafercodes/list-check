import React from "react";
import "./App.css";

import Navbar from "../Navbar/Navbar";
import Lister from "../Lister/Lister";

const App = () => {
  return (
    <div>
      <Navbar />
      <h2 id="intro-text"><span className="highlight-color">Explore</span> Your List Collections &darr;</h2>
      <div className="grow">
        <Lister
          list_name="2020 Christmas Crew"
          uri="/list1"
          list_cover_image="https://image.freepik.com/free-vector/doodle-christmas-holiday-card-with-white-placeholder_78458-256.jpg"
        />
      </div>
    </div>
  );
};

export default App;
