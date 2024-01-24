import { useState } from "react";
import Hamburger from "hamburger-react";
import LinksMenu from "./LinksMenu.jsx";
import { navLinks } from "../../utils/consts.js";
import classes from "../../style/Navbar/Navbar.module.css";

function Navbar() {
  // const [selectedLink, setSelectedLink] = useState("HOME");
  // const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  //   const scrolledNavbarStyle = isScrolled ? classes.scrolledNavbar : "";
  //   const scrolledLinkStyle = isScrolled ? classes.scrolledlink : "";

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const scrollTop = window.scrollY || document.documentElement.scrollTop;
  //       const isScrolled = scrollTop > 0;
  //       setIsScrolled(isScrolled);
  //     };
  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, [setIsScrolled]);

  //   const linkOnClickHandler = (link) => {
  //     setSelectedLink(link);
  //   };

  const displayLinks = navLinks.map((link) => (
    <a href={`#${link}`} className={classes.link} key={link}>
      {link}
    </a>
  ));

  return (
    <div className={`${classes.navbar}`}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src="src\assets\Logo.png" />
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
