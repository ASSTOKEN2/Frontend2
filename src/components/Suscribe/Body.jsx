import React from "react";
import Cards from "./Cards";
import Featureblog from "./Featureblog";
import Search from "./Search";

const Body = () => {
  return (
    <>
      <Featureblog />
      <Cards />
      <Search />
    </>
  );
};

export default Body;
