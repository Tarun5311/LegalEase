import React from "react";
import './SideBar.css'

function SideBar() {

  return (
      <div className="sidebar">
          <ul>
            <li>
              <a href="/homepage">Home Page</a>
            </li>
            <li>
              <a href="/search">Find a Lawyer</a>
            </li>
            <li>
              <a href="#">Calendar</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
          </ul>
      </div>
  );
}

export default SideBar;
