import Link from "next/link";
import Image from "next/image";
import classes from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faGlobe,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.png";
const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <Image className={classes.image} src={logo} width={100} height={115} />
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
      <div className={classes.contact}>
        <FontAwesomeIcon icon={faGlobe} />
        <FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon icon={faBagShopping} />
        <button className={classes["contact-us"]}>Contact us</button>
      </div>
      <div className={classes["side-bar"]}>
        <span className={classes["menu-icon"]}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
