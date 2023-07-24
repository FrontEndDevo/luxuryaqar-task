"use client";
import { useState } from "react";
import Bullet from "./Bullet/Bullet";
import Review from "./Review/Review";
import classes from "./Reviews.module.scss";
const Reviews = (props) => {
  const [bulletIndex, setBulletIndex] = useState(0);

  // Render all coming reviews from API.
  const allReviews = props.reviews.map((review, index) => (
    <Review
      key={index}
      index={index + 1}
      rate={review.rate}
      feedback={review.feedback}
      reviewer={review.reviewer}
    />
  ));

  // Get the index of clicked bullet:
  const onClickBulletHandler = (i) => {
    setBulletIndex(i);
  };

  const screenWidth = window.innerWidth;

  console.log(screenWidth);
  // Detect how much Bullet must be rendered:
  const numOfBullets =
    screenWidth < 768
      ? props.reviews.length
      : (screenWidth >= 768) & (screenWidth < 1200)
      ? Math.ceil(props.reviews.length / 2)
      : Math.ceil(props.reviews.length / 4);

  const allBullets = [];
  for (let i = 0; i < numOfBullets; i++) {
    const bullet = (
      <Bullet
        key={i}
        index={i}
        clicking={onClickBulletHandler}
        active={i == bulletIndex ? true : false}
      />
    );
    allBullets.push(bullet);
  }

  return (
    <section className={classes.reviews}>
      <h2 className={classes.title}>What they say about us</h2>
      <div className={classes.container}>
        <ul
          className={classes["all-reviews"]}
          style={{
            transform: `translateX(-${100 * bulletIndex}%)`,
          }}
        >
          {allReviews}
        </ul>
      </div>
      <div className={classes["slider-bullets"]}>{allBullets}</div>
    </section>
  );
};

export default Reviews;
