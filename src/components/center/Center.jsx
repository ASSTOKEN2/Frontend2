"use client";
import React from "react";
import styles from "./center.module.css";
const Center = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <img
            src="/thumbs.svg"
            width={50}
            height={50}
            alt="thumb"
            className={styles.img}
          />
          <p className={styles.wallet}>
            Wallet ID: <span>12345</span>
          </p>
          <img
            src="/copy.svg"
            width={30}
            height={30}
            alt="thumb"
            className={styles.img}
          />
        </div>
        <div className={styles.right}>
          <img
            src="/bell.svg"
            width={30}
            height={30}
            alt="bell"
            className={styles.img}
          />
          <img
            src="/pics.svg"
            width={30}
            height={30}
            alt="thumb"
            className={styles.img}
          />
          <p className={styles.name}>Smart Abiodun</p>
        </div>
      </div>
    </div>
  );
};

export default Center;
