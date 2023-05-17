import React from "react";
import image from "../images/heroimg1.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
        {/* Your Legal Ally,<br /> 
        Empowering You Through Expert Guidance */}

        {/* Unlocking Justice,<br /> 
        Your Trusted Guide to Legal Solutions */}
          Your Rights, <br />
          Our Responsibility
        </h1>
        <p>
        Empowering you with knowledge, defending your rights. 
        Our dedicated team of legal experts is here to guide you through
        the complexities of the law, ensuring your rights are protected. 
        Your peace of mind is our utmost responsibility.        
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
