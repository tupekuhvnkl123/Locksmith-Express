import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { navLinks } from "../../utils/consts";
import classes from "../../style/Navbar/LinksMenu.module.css";

const LinksMenu = ({ isOpen, setIsOpen }) => {
  const displayLinks = navLinks.map((link) => (
    <ListItem key={link} disablePadding>
      <a href={`#${link}`} className={classes.link}>
        <ListItemButton className={classes.linkButton}>{link}</ListItemButton>
      </a>
    </ListItem>
  ));

  return (
    <>
      <Drawer
        hideBackdrop
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <List>{displayLinks}</List>
      </Drawer>
      <div className={isOpen ? classes.backDrop : ""} />
    </>
  );
};

export default LinksMenu;
