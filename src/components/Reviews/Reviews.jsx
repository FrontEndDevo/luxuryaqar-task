import Review from "./Review/Review";
import classes from "./Reviews.module.scss";
const Reviews = (props) => {
  const allReviews = props.reviews.map((review, index) => (
    <Review
      key={index}
      rate={review.rate}
      feedback={review.feedback}
      reviewer={review.reviewer}
    />
  ));
  return (
    <section className={classes.reviews}>
      <h2 className={classes.title}>What they say about us</h2>
      <div className={classes.container}>
        <ul className={classes["all-reviews"]}>{allReviews}</ul>
      </div>
    </section>
  );
};

export default Reviews;
