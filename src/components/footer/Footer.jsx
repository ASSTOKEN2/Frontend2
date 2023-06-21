"use client";
import React from "react";
import styles from "./footer.module.css";
import {
  BsSend,
  BsLinkedin,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactInfo}>
        <div className={styles.firstContainer}>
          <h2 className={styles.logo}>LOGO</h2>
          <p className={styles.logoText}></p>
          At AssetToken our primary aim is to help land owners and property
          managers to connect to the right audience of investors while also
          allowing interested investors to share their purchasing power and
          invest in their so desired properties without the fear of being unable
          to afford this properties. Through the use of blockchain technology.
        </div>
        <div className={styles.secondContainer}>
          <h2 className={styles.header}>Features</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>services</li>
            <li className={styles.listItem}>Investment</li>
            <li className={styles.listItem}>Property</li>
            <li className={styles.listItem}>Resources</li>
          </ul>
        </div>
        <div className={styles.thirdContainer}>
          <h2 className={styles.header}>Other Informations</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Contact Us</li>
            <li className={styles.listItem}>Privacy Policy</li>
            <li className={styles.listItem}>FAQs</li>
            <li className={styles.listItem}>Term Of Use</li>
          </ul>
        </div>
        <div className={styles.fourthContainer}>
          <h2 className={styles.header}>Contact Us</h2>
        </div>
      </div>
      <div className={styles.signUp}>
        <div className={styles.media}>
          <BsInstagram />
          <BsLinkedin />
          <BsTwitter />
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Hello How May i Help You Today"
            className={styles.input}
          />
          <BsSend style={{ zIndex: "11111", color: "#0066F5" }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
