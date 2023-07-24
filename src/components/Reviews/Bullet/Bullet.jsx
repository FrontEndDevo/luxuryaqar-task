"use client";
import { useState } from "react";
import classes from "./Bullet.module.scss";
const Bullet = (props) => {
  const [currentBullet, setCurrentBullet] = useState(1);
  const clickBulletHandler = () => {
    setCurrentBullet(props.index);
    props.clicking(props.index);
  };
  return (
    <span
      className={`${classes.bullet} ${props.active ? classes.active : null}`}
      onClick={clickBulletHandler}
    ></span>
  );
};

export default Bullet;
