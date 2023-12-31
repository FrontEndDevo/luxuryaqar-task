"use client";
import { useEffect, useState } from "react";
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
import SideBar from "../SideBar/SideBar";

const Navbar = () => {
  // This to managing appearing and disappearing the (menu-icon):
  const [sideBar, setSideBar] = useState(false);
  // Set a background-color property on a certain scrollY:
  const [navbarBackground, setNavbarBackground] = useState(false);

  useEffect(() => {
    const changeNavbarBackground = () => {
      setNavbarBackground(window.scrollY >= 200 ? true : false);
    };

    window.addEventListener("scroll", changeNavbarBackground);
  }, []);

  const toggleSideBarHandler = () => {
    setSideBar((prevState) => !prevState);
  };

  return (
    <nav className={classes.navbar}>
      {navbarBackground && <div className={classes["navbar-bg"]}></div>}
      <Image
        className={classes.image}
        src={logo}
        width={100}
        height={115}
        alt="Luxury Arab Logo"
      />
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
        <span
          className={`${classes["menu-icon"]} ${
            sideBar && classes["close-icon"]
          }`}
          onClick={toggleSideBarHandler}
        >
          <span></span>
          <span></span>
          <span></span>
        </span>
        <SideBar showSideBar={sideBar} />
      </div>
    </nav>
  );
};

export default Navbar;
