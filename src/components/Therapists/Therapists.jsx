import Title from "../Title/Title";
import Therapist from "./Therapist/Therapist";
import classes from "./Therapists.module.scss";
const Therapists = (props) => {
  const allTherapists = props.therapists.map((therapist, i) => (
    <Therapist key={i} img={therapist.img} name={therapist.name} />
  ));
  return (
    <section className={classes.therapists}>
      <Title
        title="Professional Therapists"
        description="At vero eos et accusamus et iust deleniti atque corrupti quos."
      />
      <ul className={classes["all-therapists"]}>{allTherapists}</ul>
    </section>
  );
};

export default Therapists;
