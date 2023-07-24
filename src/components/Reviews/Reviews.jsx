import Bullet from "./Bullet/Bullet";
import Review from "./Review/Review";
import classes from "./Reviews.module.scss";
const Reviews = (props) => {
  // Render all coming reviews from API.
  const allReviews = props.reviews.map((review, index) => (
    <Review
      key={index}
      rate={review.rate}
      feedback={review.feedback}
      reviewer={review.reviewer}
    />
  ));

  // Detect how much Bullet must be rendered:
  const numOfBullets = Math.ceil(props.reviews.length / 4);

  const allBullets = [];
  for (let i = 1; i <= numOfBullets; i++) {
    const bullet = <Bullet key={i} index={i} />;
    allBullets.push(bullet);
  }

  return (
    <section className={classes.reviews}>
      <h2 className={classes.title}>What they say about us</h2>
      <div className={classes.container}>
        <ul className={classes["all-reviews"]}>{allReviews}</ul>
      </div>
      <div className={classes["slider-bullets"]}>{allBullets}</div>
    </section>
  );
};

export default Reviews;
