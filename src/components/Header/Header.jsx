import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import flower from "../../assets/images/flower-min.png";
import classes from "./Header.module.scss";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarDays,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.image}>
        <img src={flower} alt="flower background" loading="lazy" />
      </div>
      <div className="title">
        <h1>Relax & Enjoy</h1>
        <p>
          Luxury Arab Spa is a holistic wellbeing center promoting a healthier
          way of living. The spa offers a broad range of services, all under one
          roof.
        </p>
      </div>
      <section className={classes.booking}>
        <div className={classes.treatment}>
          <div className={classes.heading}>
            <h4>Select Treatment</h4>
            {/* <FontAwesomeIcon icon={faChevronUp} /> */}
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          {/* <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul> */}
        </div>
        <div className={classes.date}>
          <div className={classes.heading}>
            <h4>Select a Date</h4>
            <FontAwesomeIcon icon={faCalendarDays} />
          </div>
          {/* <input type="date" name="date" id="date" /> */}
        </div>
        <div className={classes.therapist}>
          <div className={classes.heading}>
            <h4>Select a Therapist</h4>
            {/* <FontAwesomeIcon icon={faChevronUp} /> */}
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          {/* <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul> */}
        </div>
        <div className={classes.guest}>
          <div className={classes.heading}>
            <h4>Guest Information</h4>
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
        <button>Book Now</button>
      </section>
      <aside className={classes.social}>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faWhatsapp} />
      </aside>
    </header>
  );
};

export default Header;