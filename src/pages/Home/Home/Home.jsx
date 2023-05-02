// eslint-disable-next-line no-unused-vars
import React from "react";
import landing from "../../../assets/landing.webp";
import '../Home/Home.css'

const Home = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundSize: " cover" }}>
      <header>
        <h1 style={{ marginLeft: "30%" }}>Welcome to Chef Recipes</h1>
      </header>
      <main style={{display:'flex'}}>
        <section>
            <img src={landing} alt="" />
        </section>
        <section
          style={{ padding: "40px", textAlign: "center", borderRadius: "10px" }}
        >
          <h2>Discover delicious recipes from top chefs</h2>
          <p>
            Browse our extensive collection of recipes from renowned chefs and
            create your next culinary masterpiece.
          </p>
          <a href="#">Get started</a>
        </section>
      </main>
    </div>
  );
};

export default Home;
