import React from "react";
import { Link } from "react-router-dom";
import photo from "../Images/photo.png";
import Toggle from "../Config/Toggler";

const Header = ({ theme, toggleTheme, history }) => {
  return (
    <header>
      <div>
        <img src={photo} alt="James Tarpey" />
      </div>
      <div>
        <h1>
          <Link to="/">James Tarpey </Link>
        </h1>
        <p>Software Engineer</p>
      </div>
      <div>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
};

export default Header;
