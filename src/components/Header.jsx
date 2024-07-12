import React, { useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { FaCirclePause } from "react-icons/fa6";
import { TiArrowRightThick } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom";


const Header = () => {
  const [query, setQuery] = useState("");
  const [toggle, setToggle]= useState(true)
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search/${query}`);
      
    } else {
      console.log("Empty query, not navigating.");
    }
  };

  const handleDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };


 const tooogleThis=()=>{
  setToggle((now)=>!now)
 }
  return (
    <>
      <nav
        className=" "
        style={{
          backgroundImage: "url(/image/header-bg.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className=" p-2 flex justify-between items-center">
          <div className="col1 text-white group ">
            <>
              <Link to={"/"}>
                <h2 className="flex justify-start items-center text-xl lg:text-4xl font-semibold cursor-pointer shadow">
                  M{" "}
                  <span className="text-blue-600 border-2  bg-white rounded-full group-hover:text-purple-800">
                    {<FaCirclePlay />}
                  </span>
                  VIE ST
                  <span className="text-purple-800 border-2 bg-white rounded-full group-hover:text-blue-600 ">
                    {<FaCirclePause />}
                  </span>
                  RE{" "}
                </h2>
              </Link>
            </>
          </div>
          <div className="col2 text-white hidden lg:block">
            <ul className="flex  text-lg font-normal">
              <li className=" cursor-pointer mx-2 hover:text-blue-300 hover:border-b-2 border-purple-800">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className=" cursor-pointer mx-8 hover:text-blue-300 hover:border-b-2 border-purple-800">
                <NavLink to={"/tv"}>TV Series</NavLink>
              </li>
              <li className=" cursor-pointer mx-2 hover:text-blue-300 hover:border-b-2 border-purple-800">
                <NavLink to={"/movie"}>Movies</NavLink>
              </li>
              <li className=" cursor-pointer mx-8 hover:text-blue-300 hover:border-b-2 border-purple-800">
                <NavLink to={"/favorite"}>Favorite</NavLink>
              </li>
              <li className=" cursor-pointer mx-2 hover:text-blue-300 hover:border-b-2 border-purple-800">
                <NavLink to={"/about"}>About</NavLink>
              </li>
            </ul>
          </div>
          <div className="col text-white font-normal hidden lg:block">
            <Link to={"/login"}>
              <button className="flex justify-center items-center px-2 py-1 text-2xl rounded-2xl border-2 bg-purple-900 border-purple-300 hover:bg-transparent hover:border-purple-900">
                <FiLogIn className="px-1 font-bold" />
                <FaUser className="px-1" />
              </button>
            </Link>
          </div>
          <div className="block lg:hidden">
          <span onClick={tooogleThis}  className="text-3xl text-blue-50">{toggle? <span>&#8801;</span>: <IoMdClose/> }</span>
                    
                    {/* <!-- Dropdown Box  --> */}

                    {
                      toggle?<></> : <div className=" z-40  absolute w-[100%] top-[44px] right-0   flex peer-hover:justify-center hover:flex  ">
                      <div className="  rounded-xl w-[95%] flex  flex-col bg-white bg-opacity-90 shadow-md shadow-blue-950">

                      <NavLink className="px-5 py-2 text-black text-right text-lg font-semibold  hover:text-blue-500" to={'/'}>Home</NavLink>
                      <NavLink className="px-5 py-2 text-black text-right text-lg font-semibold  hover:text-blue-500" to={'/tv'}>TV Series</NavLink>
                      <NavLink className="px-5 py-2 text-black text-right text-lg font-semibold  hover:text-blue-500" to={'/movie'}>Movies</NavLink>
                      <NavLink className="px-5 py-2 text-black text-right text-lg font-semibold  hover:text-blue-500" to={'/favorite'}>Favorite</NavLink>
                      <NavLink className="px-5 py-2 text-black text-right text-lg font-semibold  hover:text-blue-500" to={'/about'}>About</NavLink>

                      </div>
                  </div> 
                    }
                  
                  
          </div>
        </div>


        {/* FOR SMALL SCREEN SIZE TO MD  */}


        <div className="flex justify-center lg:hidden">
          <div className=" relative translate-y-5 md:translate-y-7 ">
            <span className="text-xl md:text-2xl absolute bottom-2 md:bottom-3 left-4">
              <FaSearch />{" "}
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleDown}
              placeholder="Search here..."
              className="h-10 w-auto  md:h-12 md:w-96 rounded-full outline-none px-12 py-4 shadow-xl"
            />

            <button onClick={handleSearch}
              className="bg-blue-500 border-2 border-blue-800 rounded-full p-2 ms-3 text-white text-xl md:text-3xl translate-y-1 shadow hover:bg-blue-600"
            >
              <TiArrowRightThick />
            </button>
          </div>
        </div>

        {/* FOR LARGER SCREEN SIZE  */}


        <div className=" relative justify-center items-center pt-32 hidden lg:flex">
          <div className=" absolute bottom-0 ps-20">
            <h2 className="text-center text-white text-2xl translate-y-4 ">
              Find Movies & TV Series
            </h2>
            <div className=" relative translate-y-7 ">
              <span className="text-2xl absolute bottom-4 left-4">
                <FaSearch />{" "}
              </span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleDown}
                placeholder="Search here..."
                className="h-14 w-96 lg:w-[600px] rounded-full outline-none ps-12 pe-4 py-4 shadow-xl "
              />
              <button 
              onClick={handleSearch}
             
              className="bg-blue-700 border-2 border-blue-900 rounded-full p-3 ms-3 text-white text-3xl translate-y-2 shadow hover:bg-blue-600">
                <TiArrowRightThick />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
