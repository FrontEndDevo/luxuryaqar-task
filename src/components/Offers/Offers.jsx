import classes from "./Offers.module.scss";
import SingleItem from "../SingleItem/SingleItem";
import Title from "../Title/Title";
const Offers = (props) => {
  const allOffers = props.offers.map((offer, index) => (
    <SingleItem
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
