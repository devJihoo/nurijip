import React from "react";
import { Link } from "react-router-dom";
import catImg from "img/cat.png";

const Navigation = () => (
  <nav className="navbar">
    <img src={catImg} style={{ width: "30px", borderRadius: "50%" }} />
    <Link to="/">#메인페이지</Link>
    <Link to="/profile">#나의_프로필</Link>
  </nav>
);

export default Navigation;
