import classes from "../../style/Service/ServiceItem.module.css";

const ServiceItem = ({ title, content, Icon }) => {
  return (
    <div className={classes.serviceItem}>
      <div className={classes.iconContainer}>
        <Icon className={classes.icon} />
      </div>
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.content}>{content}</p>
    </div>
  );
};

export default ServiceItem;
