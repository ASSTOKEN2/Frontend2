import React from "react";
import styles from "./propertyListing.module.css";
import { Link } from "react-router-dom";
const data = [
  {
    id: 1,
    title: "market price",
    value: "$1200000",
    unit: 1200,
    available: 120,
    address: "419 igbo state lamurudu lagos",
    propertyId: "142354io",
  },
];
const PropertyLIsting = () => {
  return (
    <div className={styles.container}>
      <h1 className="listing">Property Listing</h1>
      <div className={styles.btnCont}>
        <Link to="/market">
          <button className={`${styles.btn} ${styles.primary}`}>Market</button>
        </Link>
        <Link to="/owned">
          <button className={`${styles.btn} ${styles.secondary}`}>Owned</button>
        </Link>
        <Link to="/dashboard/create">
          <button className={`${styles.btn} ${styles.tetiary}`}>+</button>
        </Link>
      </div>
      <div className={styles.listWrap}>
        <div className={styles.listingCont}>
          <div className={styles.listingImg}>
            <img
              src="Images/house.svg"
              width={300}
              height={300}
              alt="img"
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className={styles.listingInfo}>
            {data.map((infos) => (
              <div key={infos.id} className={styles.infoCont}>
                <div className={styles.market}>
                  <p className={styles.infoTitle}>{infos.title}:</p>
                  <p className={styles.infoValue}>{infos.value}</p>
                </div>
                <p className={styles.unit}>Unit:{infos.unit}</p>
                <p className={styles.available}>
                  Available Unit:{infos.available}
                </p>
                <p className={styles.address}>{infos.address}</p>
                <p className={styles.propertyId}>
                  Property Id: {infos.propertyId}
                </p>
              </div>
            ))}
            <Link href="/buy">
              <button className={`${styles.btn} ${styles.secondary}`}>
                buy token
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.listWrap}>
        <div className={styles.listingCont}>
          <div className={styles.listingImg}>
            <img
              src="Images/house.svg"
              width={300}
              height={300}
              alt="img"
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className={styles.listingInfo}>
            {data.map((infos) => (
              <div key={infos.id} className={styles.infoCont}>
                <div className={styles.market}>
                  <p className={styles.infoTitle}>{infos.title}:</p>
                  <p className={styles.infoValue}>{infos.value}</p>
                </div>
                <p className={styles.unit}>Unit:{infos.unit}</p>
                <p className={styles.available}>
                  Available Unit:{infos.available}
                </p>
                <p className={styles.address}>{infos.address}</p>
                <p className={styles.propertyId}>
                  Property Id: {infos.propertyId}
                </p>
              </div>
            ))}
            <Link href="/buy">
              <button className={`${styles.btn} ${styles.secondary}`}>
                buy token
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyLIsting;
