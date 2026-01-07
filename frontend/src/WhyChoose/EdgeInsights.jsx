import React from "react";
import "../WhyChoose/EdgeInsights.css";
import { FaLightbulb, FaChartLine } from "react-icons/fa";
import useScrollAnimation from "../useScrollAnimation"

const EdgeInsights = () => {
  useScrollAnimation(); // activate scroll animations

  return (
    <section className="fs-ei-section">
      <div className="fs-ei-header animate-fade-up">
        <h2>Our Edge & Key Insights</h2>
        <p>
          Discover what makes Foursight Learning stand apart — our innovation,
          expertise, and forward-thinking approach that drives meaningful impact.
        </p>
      </div>

      <div className="fs-ei-cards">
        <div className="fs-ei-card animate-fade-up" style={{ transitionDelay: "0.2s" }}>
          <div className="fs-ei-icon">
            <FaLightbulb />
          </div>
          <h3 className="fs-ei-title">Our Edge</h3>
          <p className="fs-ei-text">
            We provide end-to-end learning solutions globally — from professional training
            and corporate consultancy to educational institution establishment and management.
            Our comprehensive approach ensures sustainable growth and measurable impact across
            all sectors we serve.
          </p>
        </div>

        <div className="fs-ei-card animate-fade-up" style={{ transitionDelay: "0.4s" }}>
          <div className="fs-ei-icon">
            <FaChartLine />
          </div>
          <h3 className="fs-ei-title">Key Insights</h3>
          <ul className="fs-ei-list">
            <li>Global reach with local implementation expertise</li>
            <li>Integrated training, consultancy, and institutional support</li>
            <li>Focus on practical skills and employability outcomes</li>
            <li>Research-driven educational tools and publications</li>
            <li>Partnerships with educational and corporate entities worldwide</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EdgeInsights;
