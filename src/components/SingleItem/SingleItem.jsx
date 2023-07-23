import Image from "next/image";
import styles from "./SingleItem.module.scss";
const SingleItem = (props) => {
  const { img, title, description, time, cost } = props;
  return (
    <li className={styles.item}>
      <Image
        className={styles["item-image"]}
        loading="lazy"
        src={img}
        width={400}
        height={400}
        alt={title}
      />
      <div className={styles.details}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.numbers}>
          <span className={styles.period}>{time}</span> &ndash;{" "}
          <span className={styles.currency}>{cost}</span>
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles["view-more"]}>view more</button>
        <button className={styles["book-now"]}>book now</button>
      </div>
    </li>
  );
};

export default SingleItem;
