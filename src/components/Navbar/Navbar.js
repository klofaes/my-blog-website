import React, {Fragment} from "react";
import {Link} from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
   return (
      <Fragment>
         <hr />
         <ul className="links">
            <Link to="/">
               <li href="www.pacman.live" className="link link1">Home</li>
            </Link>
            <Link to="/compose">
               <li href="www.pacman.live" className="link link2">About</li>
            </Link>
            <Link to="/contact">
               <li href="www.pacman.live" className="link link3">Contact</li>
            </Link>
            <Link to="/social">
               <li href="www.pacman.live" className="link link4">Social</li>
            </Link>
            <Link to="/signin">
               <li href="www.abcd.com" className="link link5">SignIn</li>
            </Link>
         </ul>
         <hr />
      </Fragment>
   );
};

export default Navbar;