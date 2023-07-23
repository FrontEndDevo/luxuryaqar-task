import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Footer.module.scss";
import { faLocationDot, faMobile } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faSnapchat,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const LUXURY_ARAB_LINKS = [
  "about us",
  "careers",
  "products",
  "gallery",
  "friends reffering",
  "terms and conditions",
  "affiliate marketing",
  "site map",
];

const LUXURY_ARAB_SOCIAL = [
  {
    name: "facebook",
    icon: faFacebook,
  },
  {
    name: "instagram",
    icon: faInstagram,
  },
  {
    name: "twitter",
    icon: faTwitter,
  },
  {
    name: "whatsapp",
    icon: faWhatsapp,
  },
  {
    name: "spanchat",
    icon: faSnapchat,
  },
  {
    name: "youtube",
    icon: faYoutube,
  },
  {
    name: "pinterest",
    icon: faPinterest,
  },
];
const Footer = () => {
  // I extract these render procceses here to keep JSX simple.
  const footerLinks = LUXURY_ARAB_LINKS.map((link) => (
    <li key={link}>
      <Link href={link.replace(/\s/gi, "-")}>{link}</Link>
    </li>
  ));

  const footerSocial = LUXURY_ARAB_SOCIAL.map((social) => (
    <li key={social.name}>
      <FontAwesomeIcon icon={social.icon} />
      <Link href="/">{social.name}</Link>
    </li>
  ));

  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <div className={classes["L-H-S"]}>
          <div className={classes.info}>
            <h3>Luxury Arab Spa</h3>
            <p>
              Luxury Arab Spa is a holistic wellbeing center promoting a
              healthier way of living. The spa offers a broad range of services,
              all under one roof. Come in and relax to soothing music as our
              therapists provide the perfect treatment. Our massage is specially
              designed to help people achieve the perfect mind-body harmony.
            </p>
          </div>
          <div className={classes.contact}>
            <div className={classes.address}>
              <FontAwesomeIcon icon={faLocationDot} />
              <p>
                Address: Kuwait Road, Al Mankhool, Burdubai - Dubai - United
                Arab Emirates
              </p>
            </div>
            <div className={classes.mobile}>
              <FontAwesomeIcon icon={faMobile} />
              <p>Mobile: +971528082776</p>
            </div>
          </div>
        </div>
        <div className={classes["R-H-S"]}>
          <ul className={classes.links}>
            <h6>Links</h6>
            {footerLinks}
          </ul>
          <ul className={classes.social}>
            <h6>Social</h6>
            {footerSocial}
          </ul>
        </div>
      </div>
      <div className={classes["copy-rights"]}>
        Copyright &copy; 2023 Luxury Arab Spa
      </div>
    </footer>
  );
};

export default Footer;
