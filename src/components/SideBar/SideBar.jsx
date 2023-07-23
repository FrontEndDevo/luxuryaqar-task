import Image from "next/image";
import classes from "./SideBar.module.scss";
import logo from "../../assets/images/logo.png";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBagShopping,
  faGlobe,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = (props) => {
  // To keep JSX lean ASAP.
  const navbarLinks = (
    <ul className={classes.links}>
      <li>
        <Link href="/home">Home</Link>
      </li>
      <li>
        <Link href="/offers">Offers</Link>
      </li>
      <li>
        <Link href="/services">Services</Link>
      </li>
      <li>
        <Link href="/therapists">Therapists</Link>
      </li>
      <li>
        <Link href="/memberships">Memberships</Link>
      </li>
    </ul>
  );

  return (
    <aside className={classes["side-bar"]}>
      <Image className={classes.image} src={logo} width={100} height={115} />
      {navbarLinks}
      <div className={classes.contact}>
        <FontAwesomeIcon icon={faGlobe} />
        <FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon icon={faBagShopping} />
        <button className={classes["contact-us"]}>Contact us</button>
      </div>
      <div className={classes.social}>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faWhatsapp} />
      </div>
    </aside>
  );
};

export default SideBar;
