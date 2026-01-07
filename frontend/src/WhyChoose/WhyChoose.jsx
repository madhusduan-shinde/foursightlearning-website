import React from "react";
import "../WhyChoose/WhyChoose.css";
import img8 from "../images/9.jpg";
import useScrollAnimation from "../useScrollAnimation";

const WhyChoose = () => {
  useScrollAnimation(); // activate scroll animations

  const points = [
    {
      number: "01",
      title: "Global Training & Consultancy",
      text: "Professional training and consultancy services for educational institutions, corporates, and government bodies worldwide.",
    },
    {
      number: "02",
      title: "Comprehensive Career Development",
      text: "End-to-end solutions including counseling, admissions, internships, apprenticeships, and placement services.",
    },
    {
      number: "03",
      title: "Educational Institution Support",
      text: "Establishing, managing, and supporting educational institutes, diploma, and certification courses.",
    },
    {
      number: "04",
      title: "Research & Development Focus",
      text: "Developing educational tools, publications, and conducting research to advance learning methodologies.",
    },
  ];

  return (
    <section className="whychoose-section">
      <div className="whychoose-container">
        {/* Left Side */}
        <div className="whychoose-left animate-fade-right">
          <h6 className="whychoose-subtitle animate-fade-up">You Will Love It</h6>
          <h2 className="whychoose-title animate-fade-up">Why 4Sight Learning?</h2>

          <div className="whychoose-points">
            {points.map((point, index) => (
              <div
                key={index}
                className="whychoose-item animate-fade-up"
                style={{ transitionDelay: `${0.2 * index}s` }}
              >
                <div className="whychoose-number">{point.number}</div>
                <div className="whychoose-text">
                  <h4>{point.title}</h4>
                  <p>{point.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="whychoose-right animate-fade-left">
          <div className="whychoose-image-container animate-zoom-in">
            <img src={img8} alt="Why 4Sight Learning" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
