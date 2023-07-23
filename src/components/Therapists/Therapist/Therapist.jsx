import Image from "next/image";
import classes from "./Therapist.module.scss";
const Therapist = (props) => {
  return (
    <li className={classes.therapist}>
      <Image src={props.img} height={100} width={100} />
      <div>
        <h4>{props.name}</h4>
        <button className={classes.review}>Add Review</button>
      </div>
    </li>
  );
};

export default Therapist;
