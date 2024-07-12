import React, { useEffect, useState } from "react";
import SlidingCart from "../components/SlidingCart";
import Tranding from "../components/Tranding";
// import TopRated from "../components/TopRated";
import ComingSoon from "../components/ComingSoon";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { FaFire } from "react-icons/fa";



const Homepage = () => {
  const [apiData, setApiData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGNiMTk2YTYyMjBiMDkxZGFmNWY3YWRmNTg3NGY2ZCIsInN1YiI6IjY2NmQwZDIzMDAwMDAwMDAwMDgzMWMwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yKdBESAhPJTtkNJYWtUBm8D7cMo13pMfP2XeOEPYSzo",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));
  });

  return (
    <>
      <Header />
      <div className="mt-3 md:mt-4 lg:mt-6 mb-0 md:mb-3 lg:mb-4">
        <SlidingCart />
      </div>
      <div>
     
      </div>
      <div className="">
        <Tranding />
      </div>
    

      <div className="px-4 md:px-14 lg:px-20 xl:px-24 bg-blue-100 py-8">
        <div>
          <h2 className="flex text-purple-800 text-xl md:text-3xl lg:text-4xl py-1 font-bold">
            Coming Soon Movies... <FaFire />
          </h2>
          <hr className=" border-2 border-purple-600 my-1 mb-4" />
        </div>
        <div className="bg-blue-200 py-2 px-1 md:px-4 md:py-4 lg:py-6 xl:py-8 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3 lg:gap-4 shadow-md shadow-black">
          {apiData.slice(0, 12).map((propJanewala, i) => (
            <ComingSoon item={propJanewala} key={i} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Homepage;
