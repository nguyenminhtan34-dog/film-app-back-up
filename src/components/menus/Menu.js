import React from "react";
import MenuItem from "./MenuItem";
import { FaHome, FaHotjar, FaStar } from "react-icons/fa";
import { MdTheaterComedy } from "react-icons/md";
import {
  GiNinjaHeroicStance,
  GiRomanToga,
  GiGhost,
  GiBandageRoll,
} from "react-icons/gi";
import "./menu.scss";

function Menus(props) {
  return (
    <div className="menu">
      <MenuItem to="Original" name="Home" Icon={FaHome} />
      <MenuItem to="Trending" name="Trending" Icon={FaHotjar} />
      <MenuItem to="TopRate" name="Top rated" Icon={FaStar} />
      <MenuItem to="Action" name="Actions Movies" Icon={GiNinjaHeroicStance} />
      <MenuItem to="Comedy" name="Comedy Movies" Icon={MdTheaterComedy} />
      <MenuItem to="Horror" name="Horror Movies" Icon={GiGhost} />
    </div>
  );
}

export default React.memo(Menus);
