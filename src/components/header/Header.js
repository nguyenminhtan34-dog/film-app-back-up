import logo from "../../assets/img/logo.png";
import { useState, useEffect } from "react";
import { useScrollY } from "../hooks/useScrollY";
import { MdSearch } from "react-icons/md";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";

const Header = (props) => {
  const [scrollY] = useScrollY();
  const [keyWords, setKeyWords] = useState("");
  const navigate = useNavigate();
  const handleChangeInput = (event) => {
    let keyWords = event.target.value;
    setKeyWords(keyWords);
    keyWords.length > 0
      ? navigate(`/search?keywords=${keyWords.trim()}`)
      : navigate("/");
  };
  const goHome = () => {
    navigate("/");
    setKeyWords("");
  };
  return (
    <div
      className="header "
      style={
        scrollY < 50
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "#111111" }
      }
    >
      <div className="header-logo" onClick={goHome}>
        <img src={logo} alt="LOGO" />
      </div>
      <div className="header-search">
        <MdSearch className="header-search-icon" />
        <input
          type="text"
          className="header-search-input"
          placeholder="Input Title, genres, people"
          onChange={(event) => handleChangeInput(event)}
          value={keyWords}
        />
      </div>
      {/* <ul className="header-menu">
        <li className="header-menu-item">
          <a className="header-menu-link">Home</a>
        </li>
        <li className="header-menu-item">
          <a className="header-menu-link">Trending</a>
        </li>
        <li className="header-menu-item">
          <a className="header-menu-link">Top Rated</a>
        </li>
      </ul> */}
    </div>
  );
};

export default Header;
