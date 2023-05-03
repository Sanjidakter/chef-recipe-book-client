// eslint-disable-next-line no-unused-vars
import React from "react";
import berlin from "../../../assets/berlin.webp";
import lisbon from "../../../assets/lisbon.webp";
import sanfrisco from "../../../assets/sanfransico.webp";
import landing from "../../../assets/landing.webp";
import london from "../../../assets/london.webp";
import p1 from "../../../assets/p1.webp";
import p2 from "../../../assets/p2.webp";
import p3 from "../../../assets/p3.webp";
import "../Home/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripfire, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundSize: " cover" }}>
      <header>
        <h1 style={{ marginLeft: "30%" }}>Welcome to Chef Recipe Book</h1>
      </header>
      <main style={{ display: "flex" }}>
        <section className="intro">
          <img src={landing} alt="" />
        </section>
        <section
          style={{ padding: "40px", textAlign: "center", borderRadius: "10px" }}
        >
          <h2 style={{ fontWeight: "bold", textAlign: "center" }}>
            Discover delicious recipes from top chefs
          </h2>
          <p>
            Browse our extensive collection of recipes from renowned chefs and
            create your next culinary masterpiece.
          </p>
          <a href="#">Get started</a>
        </section>
      </main>
      <section
        style={{ marginTop: "10%", marginBottom: "10%" }}
        className="section-cities"
      >
        <div className="row oheading">
          <h2 style={{ fontWeight: "bold", textAlign: "center" }}>we're currently in these cities</h2>
        </div>
        <div className="row">
          <div className="col span-1-of-4 ">
            <img src={lisbon} alt="Lisbon" />
            <h3>Lisbon</h3>
            <div className="city-feature">
              <p>1600+ happy eaters</p>
            </div>
            <div className="city-feature">
              <a href="#">
                <FontAwesomeIcon icon={faGripfire} />
              </a>
              <p>60+ top chefs</p>
            </div>
            <div className="city-feature">
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <p>@foodRecipe_lx</p>
            </div>
          </div>
          <div className="col span-1-of-4 ">
            <img src={sanfrisco} alt="San Francisco" />
            <h3>San Francisco</h3>
            <div className="city-feature">
              <p>3700+ happy eaters</p>
            </div>
            <div className="city-feature">
              <a href="#">
                <FontAwesomeIcon icon={faGripfire} />
              </a>
              <p>160+ top chefs</p>
            </div>
            <div className="city-feature">
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <p>@foodRecipe_sf</p>
            </div>
          </div>
          <div className="col span-1-of-4 ">
            <img src={berlin} alt="Berlin" />
            <h3>Berlin</h3>
            <div className="city-feature">
              <p>2300+ happy eaters</p>
            </div>
            <div className="city-feature">
              <a href="#">
                <FontAwesomeIcon icon={faGripfire} />
              </a>
              <p>110+ top chefs</p>
            </div>
            <div className="city-feature">
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <p>@foodRecipe_berlin</p>
            </div>
          </div>
          <div className="col span-1-of-4 ">
            <img src={london} alt="London" />
            <h3>London</h3>
            <div className="city-feature">
              <p>1200+ happy eaters</p>
            </div>
            <div className="city-feature">
              <a href="#">
                <FontAwesomeIcon icon={faGripfire} />
              </a>
              <p>50+ top chefs</p>
            </div>
            <div className="city-feature">
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <p>@foodRecipe_london</p>
            </div>
          </div>
        </div>
      </section>
      <section style={{marginBottom:'10%'}} className="section-testimonials">
        <div className="row ">
          <h2 style={{ fontWeight: "bold", textAlign: "center" }}>
            Our customers can't live without us
          </h2>
        </div>
        <div className="row">
          <div className="col span-1-of-4 ">
            <blockquote>
              <p>
                Omnifood is just awesome! I just launched a startup which leaves
                me with no time for cooking, so Omnifood is a life-saver. Now
                that I got used to it, I couldn't live without my daily meals!
              </p>
              <cite>
                <img
                  style={{ width: "30%", height: "50%" }}
                  src={p3}
                  alt="Alberto Duncan"
                />
                Alberto Duncan
              </cite>
            </blockquote>
          </div>
          <div className="col span-1-of-4">
            <blockquote>
              <p>
                Omnifood is just awesome! I just launched a startup which leaves
                me with no time for cooking, so Omnifood is a life-saver. Now
                that I got used to it, I couldn't live without my daily meals!
              </p>
              <cite>
                <img
                  style={{ width: "30%", height: "50%" }}
                  src={p2}
                  alt="Alberto Duncan"
                />
                Alberto Duncan
              </cite>
            </blockquote>
          </div>
          <div className="col span-1-of-4">
            <blockquote>
              <p>
                Omnifood is just awesome! I just launched a startup which leaves
                me with no time for cooking, so Omnifood is a life-saver. Now
                that I got used to it, I couldn't live without my daily meals!
              </p>
              <cite>
                <img
                 style={{ width: "30%", height: "50%" }}
                  src={p3}
                  alt="Alberto Duncan"
                />
                Alberto Duncan
              </cite>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
