import Image from "next/image";
import classes from "./Therapist.module.scss";
const Therapist = (props) => {
  return (
    <li className={classes.therapist}>
      <Image className={classes['therapist-image']} src={props.img} height={400} width={380} />
      <div>
        <h4>{props.name}</h4>
        <button className={classes.review}>Add Review</button>
      </div>
    </li>
  );
};

export default Therapist;
