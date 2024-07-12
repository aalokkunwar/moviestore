import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaCirclePlay } from "react-icons/fa6";

const SearchResult = () => {
  const { query } = useParams(); // Get the search query from URL params
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    const fetchResults = () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGNiMTk2YTYyMjBiMDkxZGFmNWY3YWRmNTg3NGY2ZCIsInN1YiI6IjY2NmQwZDIzMDAwMDAwMDAwMDgzMWMwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yKdBESAhPJTtkNJYWtUBm8D7cMo13pMfP2XeOEPYSzo",
        },
      };

      // Fetch movies
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log("Movies:", response);
          setMovies(response.results);
        })
        .catch((err) => console.error(err));

      // Fetch TV shows
      fetch(
        `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log("TV Shows:", response);
          setTvShows(response.results);
        })
        .catch((err) => console.error(err));
    };

    fetchResults();
  }, [query]); // Refetch data whenever the query changes

  return (
    <div className="px-4 md:px-14 lg:px-20 xl:px-24 bg-purple-100 py-8 pb-20">
      <div>
        <h2 className="flex text-blue-800 text-xl md:text-3xl lg:text-4xl py-1 font-bold">
          Search Results for "<span className="text-red-800">{query}</span>"
        </h2>
        <hr className="border-2 border-blue-600 my-1 mb-4" />
      </div>

      {/* Movies Section */}
      {movies.length > 0 && (
        <div>
          <h3 className="text-center text-xl md:text-2xl lg:text-4xl py-2 font-semibold text-blue-700">
            Movies
          </h3>
          <div className="bg-purple-200 py-2 px-1 md:px-4 md:py-4 lg:py-6 xl:py-8 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3 lg:gap-4 shadow-md shadow-blue-950">
            {movies.map((movie) => (
              <Link key={movie.id} to={`/view/movie/${movie.id}`}>
                <div
                  className="px-1 py-2 group shadow-md cursor-pointer shadow-blue-800 rounded-md"
                  title={movie.title}
                >
                  <div className="relative overflow-hidden">
                    <div className="rounded-md overflow-hidden">
                      <img
                        className="group-hover:brightness-50 group-hover:scale-110 rounded-md"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                      />
                    </div>
                    <span
                      title="play"
                      className="hidden group-hover:block absolute top-[35%] md:top-[34%] right-[35%] md:right-[34%] text-blue-600 text-3xl md:text-5xl bg-white rounded-full p-1"
                    >
                      <FaCirclePlay />
                    </span>
                  </div>
                  <div className="py-1">
                    <h3 className="text-[10px] md:text-[13px] lg:text-[15px] font-bold hover:text-blue-900">
                      {movie.title.length > 20
                        ? `${movie.title.slice(0, 20)}...`
                        : movie.title}
                    </h3>
                    <div className="flex justify-between items-center text-[8px] md:text-[12px] text-slate-600 font-medium pt-1">
                      <p>{new Date(movie.release_date).getFullYear()}</p>
                      <p>Rating: {Math.round(movie.vote_average * 10) / 10}</p>
                      <p>
                        <span className="border rounded-sm px-[1px] md:px-1 border-slate-600 text-[7px] md:text-[11px]">
                          Movie
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* TV Shows Section */}
      {tvShows.length > 0 && (
        <div className="mt-8">
          <h3 className=" text-center text-xl md:text-2xl lg:text-4xl py-2 font-semibold text-blue-700">
            TV Series
          </h3>
          <div className="bg-purple-200 py-2 px-1 md:px-4 md:py-4 lg:py-6 xl:py-8 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3 lg:gap-4 shadow-md shadow-black">
            {tvShows.map((show) => (
              <Link key={show.id} to={`/view/tv/${show.id}`}>
                <div
                  className="px-1 py-2 group shadow-md cursor-pointer shadow-blue-800 rounded-md"
                  title={show.name}
                >
                  <div className="relative overflow-hidden">
                    <div className="rounded-md overflow-hidden">
                      <img
                        className="group-hover:brightness-50 group-hover:scale-110 rounded-md"
                        src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                        alt={show.name}
                      />
                    </div>
                    <span
                      title="play"
                      className="hidden group-hover:block absolute top-[35%] md:top-[34%] right-[35%] md:right-[34%] text-blue-600 text-3xl md:text-5xl bg-white rounded-full p-1"
                    >
                      <FaCirclePlay />
                    </span>
                  </div>
                  <div className="py-1">
                    <h3 className="text-[10px] md:text-[13px] lg:text-[15px] font-bold hover:text-blue-900">
                      {show.name.length > 20
                        ? `${show.name.slice(0, 20)}...`
                        : show.name}
                    </h3>
                    <div className="flex justify-between items-center text-[8px] md:text-[12px] text-slate-600 font-medium pt-1">
                      <p>{new Date(show.first_air_date).getFullYear()}</p>
                      <p>Rating: {Math.round(show.vote_average * 10) / 10}</p>
                      <p>
                        <span className="border rounded-sm px-[1px] md:px-1 border-slate-600 text-[7px] md:text-[11px]">
                          tv
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
