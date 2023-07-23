import styles from "./Membership.module.scss";

const Membership = (props) => {
  const allBenefits = props.benefits.map((benefit, index) => (
    <li key={index}>
      <span>{index + 1}</span>
      {benefit}
    </li>
  ));
  return (
    <li className={styles.membership}>
      <div className={styles.package}>
        <h2>{props.name}</h2>
        <p>{props.cost}</p>
      </div>
      <ul className={styles["all-benefits"]}>{allBenefits}</ul>
      <button className={styles.register}>Register Now</button>
    </li>
  );
};

export default Membership;
