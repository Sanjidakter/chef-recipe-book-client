// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import berlin from "../../../assets/berlin.webp";
import lisbon from "../../../assets/lisbon.webp";
import sanfrisco from "../../../assets/sanfransico.webp";
import london from "../../../assets/london.webp";
import p2 from "../../../assets/p2.webp";
import p3 from "../../../assets/p3.webp";
import us from "../../../assets/us.jpg"
import "../Home/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripfire, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { AuthContext } from "../../../providers/AuthProvider";
import { Spinner } from "react-bootstrap";

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const { user, loading } = useContext(AuthContext);
  if(loading){
    return <Spinner animation="border" variant="primary"></Spinner>;
  }
  
    return (
      <div style={{ fontFamily: "Arial, sans-serif", backgroundSize: " cover" }}>
        <header>
          <h1 className="welcome" style={{ marginLeft: "20%" }}>Welcome to <span style={{fontWeight:'bold',color:'orange'}}>The New American Cuisine</span></h1>
        </header>
        <main className="row" style={{ display: "flex" }}>
          <div  className="intro col span-1-of-2">
            <img style={{width:'500px',height:'625px'}} src={us} alt="" />
          </div >
          <div className="col span-1-of-2"
            style={{ padding: "40px", textAlign: "center", borderRadius: "10px" }}
          >
            <h2 style={{ fontWeight: "bold", textAlign: "center" }}>
              Discover delicious recipes from top chefs around US
            </h2>
            <p>
              Browse our extensive collection of recipes from renowned chefs and
              create your next culinary masterpiece. Beside explore your experience with american cuisine with recipes from our chefs.
            </p>
            <a href="#">Get started</a>
          </div >
        </main>
        <section
          style={{ marginTop: "10%", marginBottom: "10%" }}
          className="section-cities"
        >
          <div className="row oheading">
            <h2 style={{ fontWeight: "bold", textAlign: "center" }}>we're currently in these cities</h2>
            <p style={{ textAlign: "center" }}><small>Providing the taste of american food at your doorstep.</small></p>
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
            <h2 style={{ fontWeight: "bold", textAlign: "center",marginBottom:'10%' }}>
              Our customers can't live without us
            </h2>
          </div>
          <div className="row">
            <div className="col span-1-of-4 ">
              <blockquote>
                <p>
                  The New American Cuisine is just awesome! I just launched a startup which leaves
                  me with no time for cooking, so The New American Cuisine is a life-saver. Now
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
                  The New American Cuisine is just awesome! I just launched a startup which leaves
                  me with no time for cooking, so The New American Cuisine is a life-saver. Now
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
                  The New American Cuisine is just awesome! I just launched a startup which leaves
                  me with no time for cooking, so The New American Cuisine is a life-saver. Now
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
