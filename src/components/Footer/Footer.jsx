import { footerContent } from "../../utils/consts";
import IconTextItem from "./IconTextItem";
import classes from "../../style/Footer/Footer.module.css";

import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { PiCertificateFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.itemsContainer}>
        <p className={classes.title}>{footerContent.title}</p>
        <IconTextItem text={footerContent.address} Icon={IoLocationSharp} />
      </div>
      <div className={classes.itemsContainer}>
        <IconTextItem text={footerContent.number} Icon={FaPhone} />
        <IconTextItem
          text={footerContent.licenseNumber}
          Icon={PiCertificateFill}
        />
        <IconTextItem text={footerContent.email} Icon={MdEmail} />
      </div>
    </footer>
  );
};

export default Footer;
