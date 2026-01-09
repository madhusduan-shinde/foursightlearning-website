import React from "react";
import "./WhyChoose.css";
import img13 from "../../images/13.jpeg";
import img14 from "../../images/14.jpg";
import useScrollAnimation from "../../useScrollAnimation";

const WhyChoose = () => {
  useScrollAnimation(); // activate scroll animations

   const points = [
    {
      number: "01",
      title: "Tailor-Made Programs",
      text: "Customized solutions designed to meet your unique organizational needs and learning goals.",
    },
    {
      number: "02",
      title: "Practical Training Methods",
      text: "Hands-on, real-world approaches that ensure immediate application and lasting results.",
    },
    {
      number: "03",
      title: "Experienced Trainers",
      text: "Led by seasoned professionals with years of proven expertise across multiple sectors.",
    },
    {
      number: "04",
      title: "Sustainable Growth Focus",
      text: "We emphasize measurable outcomes and long-term capability building for your teams.",
    },
  ];

  return (
    <section className="whychoose-section">
      <div className="container">
        <div className="whychoose-row">
          {/* Content Column */}
          <div className="whychoose-content-column col-lg-6 col-md-12 col-sm-12 order-2 animate-fade-right">
            <div className="inner-column">
              <div className="whychoose-sec-title animate-fade-up">
                <h6 className="whychoose-subtitle animate-fade-up">You Will Love It</h6>
                <h2 className="whychoose-title animate-fade-up">Why FourSight Learning?</h2>
              </div>

              {/* Points Section */}
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
          </div>

          {/* Image Column */}
          <div className="whychoose-image-column col-lg-6 col-md-12 col-sm-12 animate-fade-left">
            <div className="inner-column">
              <figure
                className="whychoose-image-1 animate-zoom-in"
                style={{ animationDelay: "0.2s" }}
              >
                <img
                  src={img14}
                  alt="Professional training and development"
                />
              </figure>
              <figure
                className="whychoose-image-2 animate-zoom-in"
                style={{ animationDelay: "0.4s" }}
              >
                <img
                  src={img13}
                  alt="Interactive workshops and consultancy"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;