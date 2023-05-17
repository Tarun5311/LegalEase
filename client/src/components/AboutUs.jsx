import React from "react";
import image from "../images/aboutimg1.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            At LegalEase, we are committed to providing 
            accessible and reliable legal assistance to 
            individuals like you. With a team of experienced attorneys, 
            we strive to demystify the legal landscape and empower you 
            with the knowledge and resources you need to navigate your legal challenges. 
            Whether it's a personal injury claim, family law matter, or any other legal concern, 
            we are here to advocate for your rights and deliver the justice you deserve. 
            Trust us to be your trusted legal partner, dedicated to your success.            
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
