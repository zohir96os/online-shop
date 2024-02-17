import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <main>
        <h1>Cybershop2045</h1>
        <p>Your one stop shop for all things cyber</p>
        <button className="see-more">
          <Link to={"/shopping"}>See more</Link>
        </button>
      </main>
    </div>
  );
};

export default Home;
