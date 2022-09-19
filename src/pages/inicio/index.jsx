import React from "react";
import Options from "../../components/home-options/options";
import Navbar from "../../components/navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className="h-64 sm:h-80 lg:h-128 bg-cover bg-bottom"
        style={{
          backgroundImage: `url("/images/main-image.jpg")`,
        }}
      ></div>
      <Options />
    </>
  );
};

export default Home;
