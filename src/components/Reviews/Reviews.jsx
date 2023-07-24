import classes from "./Reviews.module.scss";
const Reviews = (props) => {
  
  return (
    <section className={classes.reviews}>
      <h2 className={classes.title}>What they say about us</h2>
      <ul className={classes['all-reviews']}></ul>
    </section>
  );
};

export default Reviews;
