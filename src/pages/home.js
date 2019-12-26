import React from "react";
import Directory from "../comps/upkeeper";
import "./styles/home.scss";

const Home = () => {
  return (
    <div className="homepage">
      <h1>Kittens</h1>
      <Directory />
    </div>
  );
};

export default Home;
