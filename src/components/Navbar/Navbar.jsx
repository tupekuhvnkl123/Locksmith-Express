import { useState } from "react";
import Hamburger from "hamburger-react";
import LinksMenu from "./LinksMenu.jsx";
import { navLinks } from "../../utils/consts.js";
import classes from "../../style/Navbar/Navbar.module.css";
import logo from "../../assets/Logo.png";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const displayLinks = navLinks.map((link) => (
    <a href={`#${link}`} className={classes.link} key={link}>
      {link}
    </a>
  ));

  return (
    <div className={`${classes.navbar}`}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} />
      </div>
      <div className={classes.linksContainer}>{displayLinks}</div>

      <div
        className={classes.hamburgerContainer}
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        <Hamburger
          direction="right"
          color="white"
          toggled={openMenu}
          size={40}
        />
        <LinksMenu isOpen={openMenu} setIsOpen={setOpenMenu} />
      </div>
    </div>
  );
}

export default Navbar;
