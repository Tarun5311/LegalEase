import React, { useState } from "react";
import "./HomePage.css";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

function HomePage() {
  const [showMenu, setShowMenu] = useState(false);
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="HomePage">
      <NavBar/>
      {/* <SideBar/> */}
      <div className="content-home">
        <div className="image-container">
          {/* <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/11/Become_a_Lawyer.jpeg.jpg"></img> */}
          {/* <img src="https://images.unsplash.com/photo-1423592707957-3b212afa6733?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"></img> */}
          <h1 style={{"color":"white",'padding-left':"30px","top":"0","left":"0","position":"absolute"}}>LegalEase</h1>
          <h1 style={{"color":"white",'padding-right':"30px","bottom":"0","right":"0","position":"absolute"}}>One Stop Solution for All Legal Problems.</h1>
        </div>
        <div className="strip-container">
          <p>Have some Legal Issues? <br></br>
            Divorce & child Custody, Business Legal Issues
          </p>
          <button className="button">Consult Experts!</button>
        </div>
        {/* <h1>Welcome to LegalEase</h1>
        <p>This is the HomePage of LegalEase.</p>
        <p>Under Construction.</p> */}

      </div>
    </div>
  );
}

export default HomePage;
