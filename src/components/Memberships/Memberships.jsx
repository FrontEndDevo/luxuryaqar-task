import Membership from "./Membership/Membership";
import classes from "./Memberships.module.scss";
const Memberships = (props) => {
  const allMemberships = props.memberships.map((membership, i) => (
    <Membership
      key={i}
      name={membership.name}
      cost={membership.cost}
      benefits={membership.benefits}
    />
  ));
  return (
    <section className={classes.memberships}>
      <div className={classes.title}>
        <h2>Memberships</h2>
        <p>At vero eos et accusamus et iust deleniti atque corrupti quos.</p>
      </div>
      <ul className={classes["all-memberships"]}>{allMemberships}</ul>
    </section>
  );
};

export default Memberships;
