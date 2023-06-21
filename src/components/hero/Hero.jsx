"use client";
import React from "react";
import styles from "./hero.module.css";

import Slider from "../slider/Slider";

const Hero = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heroHeader}>
        Unlock the Power of Real Estate <br />
        Investments with Tokenization
      </h1>
      <div className={styles.imgContainer}>
        <Slider />
      </div>
      <p className={styles.heroText}>
        Investing in real estate has never been easier. With our innovative
        platform, you can now access lucrative real estate investment
        opportunities through tokenization. Take advantage of fractional
        ownership and join the growing community of digital real estate
        investors.
      </p>
    </div>
  );
};

export default Hero;
