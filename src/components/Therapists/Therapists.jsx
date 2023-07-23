import Title from "../Title/Title";
import classes from "./Therapists.module.scss";
const Therapists = (props) => {
  return (
    <section className={classes.therapists}>
      <Title
        title="Professional Therapists"
        description="At vero eos et accusamus et iust deleniti atque corrupti quos."
      />
      <ul className={classes["all-therapists"]}></ul>
    </section>
  );
};

export default Therapists;
