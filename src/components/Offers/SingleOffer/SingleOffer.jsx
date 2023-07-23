import Image from "next/image";
import styles from "./SingleOffer.module.scss";
import offerImg from "../../../assets/images/offers/offer1-min.png";
const SingleOffer = (props) => {
  return (
    <li className={styles.offer}>
      <Image
        className={styles["offer-image"]}
        loading="lazy"
        src={offerImg}
        width={100}
        height={100}
        alt="Offer image"
      />
      <div className={styles.details}>
        <h3>Moroccan Bath with Arabic Massage</h3>
        <p>
          This treatment involves a deep-cleansing, full-body exfoliation using
          a traditional Moroccan black soap made from natural ingredients like
          olive oil, eucalyptus, and other nourishing oils.
        </p>
        <div>
          <span className={styles.period}>75 Min</span>
          <hr />
          <span className={styles.currency}>AED 600</span>
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles["view-more"]}>view more</button>
        <button className={styles["book-now"]}>book now</button>
      </div>
    </li>
  );
};

export default SingleOffer;
