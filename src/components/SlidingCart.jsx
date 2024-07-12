import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlidingCart = () => {

  const [slide,setslide]=useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGNiMTk2YTYyMjBiMDkxZGFmNWY3YWRmNTg3NGY2ZCIsInN1YiI6IjY2NmQwZDIzMDAwMDAwMDAwMDgzMWMwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yKdBESAhPJTtkNJYWtUBm8D7cMo13pMfP2XeOEPYSzo'
    }
  };
  
   useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',options)
    .then(response => response.json())
    .then(response => setslide(response.results))
    .catch(err => console.error(err));
   },)


  // slider setting 
  const settings = {
    infinite: true,
    slidesToShow: 12, // Default for xl and above
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280, // xl and above
        settings: {
          slidesToShow: 12,
        },
      },
      {
        breakpoint: 1024, // lg and below
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768, // md and below
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 640, // sm and below
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="slider-container overflow-x-hidden pt-8 lg:pt-4 py-4 md:py-8 lg:py-10 xl:py-10">
      <Slider {...settings}>
        {slide.map((data) => (
          <div className=' p-1 bg-purple-900' >
          <img className=' hover:brightness-50 rounded-md' src={`https://image.tmdb.org/t/p/w500`+data.poster_path} alt="imga" />
        </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlidingCart;
