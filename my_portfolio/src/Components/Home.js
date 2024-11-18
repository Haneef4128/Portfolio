import React from "react";
import Haneef from "../assets/Bearded.jpg";
import TypeWriter from "./Typewriter";

const Home = () => {
  const typeWriter = ["Full Stack Developer"]
  return (
    <div>
      <div className="homepage" id="home">
        <div className="info">
          <h1 className="name slide-in-right">
            Hi there!<br />
            I'm Mohammed Haneef
          </h1>
          <p className="role">And I'm a <TypeWriter data={typeWriter} /></p>
        </div>
        <div className="image">
          <img src={Haneef} alt="Mohammed Haneef" />
        </div>
      </div>
    </div>
  );
};

export default Home;
