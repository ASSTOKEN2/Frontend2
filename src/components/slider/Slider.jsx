"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "./slider.module.css";

const Slider = () => {
    return (
        <div>
            <Carousel
                autoplay={true}
                showArrows={false}
                showIndicators={false}
                transitionTime={500}
                showStatus={false}
                autoPlay
                interval={1000}
                infiniteLoop
            >
                <div className={styles.imgContainer}>
                    <img
                        src="/Images/HomePage/image1.svg"
                        alt="image1"
                        className={styles.img}
                        width={1000}
                        height={1000}
                    />
                </div>
                <div className={styles.imgContainer}>
                    <img
                        src="Images/HomePage/Union.png"
                        alt="image1"
                        className={styles.img}
                        width={1684}
                        height={750}
                    />
                </div>
                <div className={styles.imgContainer}>
                    <img
                        src="/Images/HomePage/image1.svg"
                        alt="image1"
                        className={styles.img}
                        width={100}
                        height={100}
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;
