import React from "react";
import "./About.css";
import useScrollAnimation from "../useScrollAnimation";
import img6 from "../images/6.webp";
import img7 from "../images/7.jpg";

const About = () => {
  useScrollAnimation();

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row">

          {/* Content Column */}
          <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2 animate-fade-right">
            <div className="inner-column">
              <div className="sec-title animate-fade-up">
                <span className="title">About Company</span>
                <h2>
                  Empowering Skills,
                  <br /> Enabling Careers.
                </h2>
              </div>

              <div
                className="text animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                FourSight Learning Private Limited is a professional organization providing
                training, workshops, skill development, and consultancy services globally.
                We cater to educational institutions, corporates, government bodies, and
                organizations worldwide with customized learning solutions.
              </div>

              <div
                className="text animate-fade-up"
                style={{ animationDelay: "0.3s" }}
              >
                Our services include corporate training, business development, branding,
                management consultancy, career counseling, admission services, vocational
                education, apprenticeships, internships, career development programs, and
                placement services. We focus on blending academic knowledge with practical
                skills for real-world impact.
              </div>

              <ul className="list-style-one animate-fade-up" style={{ animationDelay: "0.4s" }}>
                <li>Global training & skill development for institutions and corporates</li>
                <li>Comprehensive career counseling and vocational education programs</li>
                <li>Educational consultancy, certification courses, and institutional support</li>
                <li>Research, publication, and educational materials development</li>
              </ul>
            </div>
          </div>

          {/* Image Column */}
          <div className="image-column col-lg-6 col-md-12 col-sm-12 animate-fade-left">
            <div className="inner-column">
              <figure
                className="image-1 animate-zoom-in"
                style={{ animationDelay: "0.2s" }}
              >
                <img
                  src={img6}
                  alt="Professional training and learning"
                />
              </figure>
              <figure
                className="image-2 animate-zoom-in"
                style={{ animationDelay: "0.4s" }}
              >
                <img
                  src={img7}
                  alt="Career development and consultancy"
                />
              </figure>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
