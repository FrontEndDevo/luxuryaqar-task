import SingleItem from "../SingleItem/SingleItem";
import Title from "../Title/Title";
import classes from "./Services.module.scss";
const Services = (props) => {
  const allServices = props.services.map((service, index) => (
    <SingleItem
      key={index}
      img={service.img}
      title={service.title}
      description={service.description}
      time={service.time}
      cost={service.cost}
    />
  ));
  return (
    <section className={classes.services}>
      <Title
        title="Services"
        description="We offer a wide range of services for you"
      />
      <ul className={classes["all-services"]}>{allServices}</ul>
    </section>
  );
};

export default Services;
