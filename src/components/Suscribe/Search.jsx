import React from "react";
import snoowhouse from "./images/snoowhouse.png";

const Search = () => {
    return (
        <div className="w-full h-screen mt-20">
            <div className="w-full h-[550px] bg-gray-700/70 absolute">
                <img className="w-full h-full object-cover mix-blend-overlay" src= {snoowhouse} alt="/"/>
            </div>
            <div className="max-m-[1240px] mx-auto text-white relative">
                <div className="px-4 py-12">
                    <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">Support </h2>
                    <h3 className="text-5xl font-bold py-6 text-center">World of Tokenization Real Estate</h3>
                    <p className="py-5 text-5xl text-blue-10 align-text-right"><b>Stay Up To Date With Lastest News, Insights, And Investment Opportunities In The  World Of Tokenization Real Estate</b></p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col  items-center justify-between-full w-md">
                        <input className="p-3 w-flex round-md text-black " type="email" placeholder="Enter Email"/>
                        <button className="bg-[blue]" text-black rounded-md font-medium >Subscribe</button>
                    </div>
                </div>

                <div>

                </div>
            </div>
        </div>
        
    );
};

export default Search;