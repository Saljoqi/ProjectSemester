import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center flex-column ">
        <h1>
        Every Task,
        <br /> a step closer to your Goals.
        </h1>
        <p className="p-text">
          Plan your <br />
          daily life tasks by using the toDOo web App,<br/>
          Because Planning means Half Work Done!
        </p>
        <button class="home-btn p-3">Make a Todoo List</button>
      </div>
    </div>
  );
};

export default Home;
