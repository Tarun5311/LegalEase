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
      <SideBar/>
      <div className="content">
        <h1>Welcome to LegalEase</h1>
        <p>This is the HomePage of LegalEase.</p>
        <p>Under Construction.</p>

      </div>
    </div>
  );
}

export default HomePage;
