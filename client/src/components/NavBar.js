import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import "./NavBar.css";


function NavBar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  const untoggleMenu = () => {
    if(showMenu === true)
    {
      setShowMenu(false);
    }
  }

  return (
    <div className="App" onClick={untoggleMenu}>
      <nav className="navbar">
        <button className="navbar-brand" onClick={()=>navigate("/homepage")}>
        LegalEase
          </button>
        <div className="navbar-menu">
          <button className="navbar-item" onClick={()=>navigate("/login")}>
            LogOut
          </button>
          {showMenu && (
            <div className="navbar-dropdown">
            <a href="/profile" className="navbar-item">
              Profile
            </a>
            <a href="/login" className="navbar-item">
              Logout
            </a>
          </div>
          )}
            
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
