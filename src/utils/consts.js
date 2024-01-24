import { AiFillHome } from "react-icons/ai";
import { FaBuilding, FaCar } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { IoKeySharp } from "react-icons/io5";
// import { BiBroadcast } from "react-icons/bi";
import TransponderKey from "../components/UI/TransponderKey";

export const navLinks = ["Home", "Service", "About", "Contact"];

export const homeContent = {
  title: "Locksmith Express",
  content:
    "Delivering mobile locksmith solutions. We're ready to assist you wherever you are, regardless of the time or circumstances. Catering to Los Angeles, CA, and the surrounding regions!",
  phoneNumber: "(424) 322-9650",
};

export const servicesItems = [
  {
    title: "Residential",
    content:
      "Ensure your home's safety. Confirm your locks function well and have emergency contacts on hand for any issues.",
    icon: AiFillHome,
  },
  {
    title: "Commercial",
    content:
      "Ensure optimal security for your commercial property. Our objective is to safeguard your financial success.",
    icon: FaBuilding,
  },
  {
    title: "Automotive",
    content:
      "Being locked out of your car is frustrating. When you find yourself in such a situation, have the contact of reliable locksmith experts on hand.",
    icon: FaCar,
  },
  {
    title: "Emergency",
    content:
      "In moments of need, prompt assistance is crucial. We comprehend the urgency of your situation and ensure swift response times.",
    icon: IoIosWarning,
  },
  {
    title: "Replacement Keys",
    content:
      "Being Top-Rated Local® locksmiths, we provide new and duplicate keys, lockout services, and various lock installations.",
    icon: IoKeySharp,
  },
  {
    title: "Transponder Keys",
    content:
      "For transponder key, FOB replacement, or any auto lock needs, choose us – your expert mobile locksmith!",
    icon: TransponderKey,
  },
];

export const aboutContent = {
  title: "About Locksmith Express",
  content:
    "Our skilled technicians undergo professional training and are equipped with the latest tools, ensuring a diverse range of locksmith services. Our comprehensive 24-hour emergency service includes house and car lockouts, lock replacement, keyless entry systems, car locksmith services (e.g., transponder key replacement), and more. We serve Los Angeles, CA, and surrounding areas, offering a swift response. Utilizing an efficient dispatch system, we promptly send the nearest technician to your location.",
};

export const footerContent = {
  title: "LOCKSMITH EXPRESS",
  address: "Los Angeles, CA 91401",
  email: "locksmithexpress1000@gmail.com",
  licenseNumber: "LCO #7961",
  number: "(424) 322-9650",
};

export const googleMapData = {
  center: {
    lat: 34.17941,
    lng: -118.43397,
  },
  zoom: 15,
};
