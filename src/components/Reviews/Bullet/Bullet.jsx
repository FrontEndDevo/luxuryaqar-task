import classes from "./Bullet.module.scss";
const Bullet = (props) => {
  return (
    <span
      className={`${classes.bullet} ${props.index == 1 ? classes.active : ""}`}
    ></span>
  );
};

export default Bullet;
