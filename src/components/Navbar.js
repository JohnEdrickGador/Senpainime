import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const burgerToggle = () => {
    setToggleMenu(!toggleMenu);
    console.log(toggleMenu);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${searchInput}`);
    window.location.reload();
  };

  const changeHandler = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
  });

  return (
    <nav className="navbar">
      <div className="website-name">
        <a href="/">Senpainime</a>
        <div className="toggle-button" onClick={burgerToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <div className="search-container">
        <form onSubmit={searchHandler}>
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={searchInput}
            onChange={changeHandler}
          ></input>
        </form>
      </div>
      {/* <div className="navigation-links">
      
      {(toggleMenu || screenWidth > 800) && ( 
          <ul>
              <li><a href="/">Credits</a></li>
              <li><a href="/about">About Me</a></li>
          </ul>
        )}
        </div> */}
    </nav>
  );
}

export default Navbar;
