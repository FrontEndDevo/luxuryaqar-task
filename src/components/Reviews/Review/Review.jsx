import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Review.module.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Review = (props) => {
  const { rate, feedback, reviewer } = props;
  return (
    <li className={classes.review}>
      <div className={classes.rate}>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
      <div className={classes.feedback}>"{feedback}"</div>
      <div className={classes.reviewer}>_ By {reviewer}</div>
    </li>
  );
};

export default Review;
