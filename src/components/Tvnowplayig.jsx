import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Tvnowplayig = ({ item = {} }) => {
  // Destructuring with default values to avoid accessing undefined properties
  const {
    id,
    original_name,
    poster_path,
    title,
    name,
    release_date,
    first_air_date,
    vote_average,
  } = item;

  const displayName = title || name || original_name || "Untitled";
  const releaseYear = new Date(release_date || first_air_date || Date.now()).getFullYear();
  const rating = Math.round((vote_average || 0) * 10) / 10;

  return (
    <Link to={`/view/tv/${id}`}>


      <div className="px-1 py-2 group shadow-md cursor-pointer shadow-purple-800 rounded-md" title={original_name}>
        <div className="relative overflow-hidden">
          <div className="rounded-md overflow-hidden">
            <img
              className="group-hover:brightness-50 group-hover:scale-110 rounded-md"
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={displayName}
              // Providing a fallback image or alt text if poster_path is undefined
              onError={(e) => { e.target.src = '/path/to/default-image.jpg'; }}
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
            {displayName.length > 20 ? `${displayName.slice(0, 20)}...` : displayName}
          </h3>
          <div className="flex justify-between items-center text-[8px] md:text-[12px] text-slate-600 font-medium pt-1">
            <p>{releaseYear}</p>
            <p>Rating: {rating}</p>
            <p>
              <span className="border rounded-sm px-[1px] md:px-1 border-slate-600 text-[7px] md:text-[11px]">tv</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Tvnowplayig;
