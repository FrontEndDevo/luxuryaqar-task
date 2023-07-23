import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./Title.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Title = (props) => {
  return (
    <div className={styles.title}>
      <div className={styles.introduction}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <button className={styles["view-all"]}>
        View all
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Title;
