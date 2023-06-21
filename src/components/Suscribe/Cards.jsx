import React from "react";
import policyone from "./images/policyone.png"
import documenting from "./images/documenting.png";
import tracking from "./images/tracking.png";
import lookingfuture from "./images/lookingfuture.png";


const Cards = () => {
    return (
        <div className="w-full py-[10rem] py-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8">
                <div className="w-full shadow-xl flex flex-col p-4 round-lg hover:scale-105 duration-300">
                    <img className="w-50 mx-auto mt-[-3em]" src={documenting} alt="/" />
                    <h2 className="text-2xl font-semibold text-left py-8">Understanding Tokenized Real Estate Investments: A Beginner's Guide</h2>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 round-lg hover:scale-105 duration-300">
                    <img className="w-50 mx-auto mt-[-3em]" src={lookingfuture} alt="/" />
                    
                    <h2 className="text-2xl font-semibold text-left py-8" >Evaluating the Potential Returns of Tokenized Real Estate Investments</h2>
                    <a href="https://blocksquare.io/" classname="text-2xl font-semibold text-left py-8 text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                    >Evaluating the Potential Returns of Tokenized Real Estate Investments</a>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 round-lg hover:scale-105 duration-300">
                    <img className="w-50 mx-auto mt-[-3em]" src={tracking} alt="/" />
                    <h2 className="text-2xl font-semibold text-left py-8">The Role of Smart Contracts in Tokenized Real Estate Investment</h2>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 round-lg hover:scale-105 duration-300">
                    <img className="w-50 mx-auto mt-[-3em]" src={policyone} alt="/" />
                    <h2 className="text-2xl font-semibold text-left py-8">Analyzing Market Trennds for Tokenized Real Estate Investment</h2>
                </div>
            </div>
        </div>
    );
};

export default Cards;