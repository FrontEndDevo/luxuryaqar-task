import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Offers.module.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SingleOffer from "./SingleOffer/SingleOffer";
const Offers = (props) => {
  return (
    <section className={classes.offers}>
      <div className={classes.title}>
        <div className={classes.introduction}>
          <h2>Offers</h2>
          <p>Promotions, deals and special offers for you</p>
        </div>
        <button className={classes["view-all"]}>
          View all
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <SingleOffer />
    </section>
  );
};

export default Offers;
