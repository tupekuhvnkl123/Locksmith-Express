import classes from "../../style/Service/Service.module.css";
import Title from "../UI/Title";
import { servicesItems } from "../../utils/consts";
import ServiceItem from "./ServiceItem";

const Service = ({ id }) => {
  return (
    <div className={classes.container} id={id}>
      <Title text="Our Services" dark />
      <div className={classes.serviceItemsContainer}>
        {servicesItems.map((item, index) => (
          <ServiceItem
            key={item.title}
            Icon={item.icon}
            title={item.title}
            content={item.content}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
