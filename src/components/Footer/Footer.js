import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        <img
          className={styles.logo}
          src={require("../../assets/images/LOGO.png")}
          alt="logo"
        />
        <a
          rel="noopener noreferrer"
          href="https://instagram.com"
          target="_blank"
        >
          <img
            className={styles.instagram}
            src={require("../../assets/icons/INSTA.png")}
            alt="instagram"
          />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://facebook.com"
          target="_blank"
        >
          <img
            className={styles.facebook}
            src={require("../../assets/icons/FB.png")}
            alt="facebook"
          />
        </a>
        <div className={styles.copyright}>
          <p>Copyright - Golux Technologies - Nenad Zivotic</p>
        </div>
      </div>
      </div>
  );
};

export default Footer;
