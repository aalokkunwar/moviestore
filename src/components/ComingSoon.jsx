import { FaCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ComingSoon = (props) => {
  return (
    <>
      <Link to={`/view/movie/${props.item.id}`}>
        <div
          className="px-1 py-2 group shadow-md cursor-pointer shadow-purple-800 rounded-md "
          title={props.item.title}
        >
          <div className=" relative overflow-hidden">
            <div className=" rounded-md overflow-hidden">
              <img
                className=" group-hover:brightness-50 group-hover:scale-110 rounded-md"
                src={`https://image.tmdb.org/t/p/w500` + props.item.poster_path}
                alt=""
              />
            </div>
            <span
              title="play"
              className="hidden group-hover:block absolute top-[35%] md:top-[34%] right-[35%] md:right-[34%] text-blue-600 text-3xl md:text-5xl bg-white rounded-full p-1"
            >
              <FaCirclePlay />
            </span>
          </div>
          <div className="py-1 ">
            <h3 className="text-[10px] md:text-[13px] lg:text-[15px] font-bold hover:text-blue-900">
              {props.item.title.length>20
                ? props.item.title.slice(0, 20)
                : props.item.title}
              {props.item.title.length > 20 && <span>...</span>}
            </h3>
            <div className="flex justify-between items-center text-[8px] md:text-[12px] text-slate-600 font-medium pt-1">
              <p>
                {new Date(
                  props.item.release_date || props.item.first_air_date
                ).getFullYear()}
              </p>
              <p>Rating:{Math.round(props.item.vote_average * 10) / 10}</p>
              <p>
                <span className="border rounded-sm px-[1px] md:px-1 border-slate-600 text-[7px] md:text-[11px]">
                  Movie
                </span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ComingSoon;
