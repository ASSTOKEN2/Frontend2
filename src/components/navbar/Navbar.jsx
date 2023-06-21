import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
const links = [
  { title: "About", url: "/about", id: 1 },
  { title: "Services", url: "/terms-of-use", id: 2 },
  { title: "Investment", url: "/investment", id: 3 },
  { title: "Property", url: "/property", id: 4 },
  { title: "Resources", url: "/resources", id: 5 },
  { title: "Dashboard", url: "/dashboard", id: 6 },
];

const button = (bg, color, border) => {};
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>
        <img
          src={require("../Dashboard/img/logo2.png")}
          style={{ width: "144px" }}
          alt=""
        />
      </Link>
      <div className={styles.linkCont}>
        {links.map((link) => (
          <Link to={link.url} key={link.id} className={styles.links}>
            {link.title}
          </Link>
        ))}
      </div>
      <div className={styles.btnCont}>
        <Link href="/login">
          <button className={`${styles.btn} ${styles.secondary}`}>Login</button>
        </Link>
        <Link href="register">
          <button className={`${styles.btn} ${styles.primary}`}>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
