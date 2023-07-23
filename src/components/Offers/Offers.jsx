import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Offers.module.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SingleOffer from "./SingleOffer/SingleOffer";
import Title from "../Title/Title";
const Offers = (props) => {
  const allOffers = props.offers.map((offer, index) => (
    <SingleOffer
      key={index}
      img={offer.img}
      title={offer.title}
      description={offer.description}
      time={offer.time}
      cost={offer.cost}
    />
  ));
  return (
    <section className={classes.offers}>
      <Title
        title="Offers"
        description="Promotions, deals and special offers for you"
      />
      <ul className={classes["all-offers"]}>{allOffers}</ul>
    </section>
  );
};

export default Offers;
