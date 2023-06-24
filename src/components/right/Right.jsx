"use client";
import React from "react";
import styles from "./right.module.css";
import { HiChatAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Right = () => {
  return (
    <aside className={styles.container}>
      <div style={{ position: "-webkit-sticky" }}>
        <div className={styles.wrapper}>
          <Link to={"/dashboard/chatbot"}>
            <div className={styles.firstCont}>
              <div className={styles.centralise}>
                <p className={styles.text}>Speak to a legal Entity</p>
                <HiChatAlt2 color="#0066f5" size="30%" />
              </div>
            </div>
          </Link>
          <div className={styles.secondCont}>
            <div className={styles.centralise}>
              <p className={styles.text}>Get your Online bank account</p>
              <div className={styles.btnCentralise}>
                <Link href="/buy">
                  <button className={`${styles.btn} ${styles.secondary}`}>
                    Wema Bank
                  </button>
                </Link>
                <p className={`${styles.text} ${styles.special}`}>Redeem</p>
                <img
                  src="Images/copy.svg"
                  width={20}
                  height={20}
                  alt="copy"
                  className={styles.copy}
                />
              </div>
              <div className={styles.btnCentralise}>
                <Link href="/buy">
                  <button className={`${styles.btn} ${styles.secondary}`}>
                    Sterling Bank
                  </button>
                </Link>
                <p className={`${styles.text} ${styles.special}`}>Redeem</p>
                <img
                  src="Images/copy.svg"
                  width={20}
                  height={20}
                  alt="copy"
                  className={styles.copy}
                />
              </div>
            </div>
          </div>
          <div className={styles.thirdCont}>
            <div className={styles.centralise}>
              <img
                src="Images/people.svg"
                width={60}
                height={60}
                alt="copy"
                className={styles.largeImg}
              />
              <div className={styles.imgFlex}>
                <img
                  src="Images/people.svg"
                  width={60}
                  height={60}
                  alt="copy"
                  className={styles.smallImg}
                />
                <img
                  src="Images/people.svg"
                  width={60}
                  height={60}
                  alt="copy"
                  className={styles.smallImg}
                />
                <img
                  src="Images/people.svg"
                  width={60}
                  height={60}
                  alt="copy"
                  className={styles.smallImg}
                />
                <img
                  src="Images/people.svg"
                  width={60}
                  height={60}
                  alt="copy"
                  className={styles.smallImg}
                />
              </div>
              <p className={`${styles.text} ${styles.medium}`}>
                join our Community
              </p>
              <p className={`${styles.text} ${styles.small}`}>
                Join Us Today and Discover Endless <br /> Opportunities for
                success
              </p>
              <Link href="/buy">
                <button className={`${styles.btn} ${styles.primary}`}>
                  Join Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Right;
