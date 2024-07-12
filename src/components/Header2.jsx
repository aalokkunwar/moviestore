import React, { useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { FaCirclePause } from "react-icons/fa6";
import { FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import { Link, NavLink, useNavigate } from "react-router-dom";

const Header2 = () => {

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

  const handleKeyDown = (event) => {
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
              {" "}
              <Link to={"/"}>
                <h2 className="flex justify-start items-center text-xl lg:text-4xl font-semibold cursor-pointer shadow">
                  M{" "}
                  <span className="text-blue-600 border-2 bg-white rounded-full group-hover:text-purple-800">
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
                <NavLink to={'/tv'}>TV Series</NavLink>
              </li>
              <li className=" cursor-pointer mx-2 hover:text-blue-300 hover:border-b-2 border-purple-800">
                <NavLink to={'/movie'}>Movies</NavLink>
              </li>
              <li className=" cursor-pointer mx-8 hover:text-blue-300 hover:border-b-2 border-purple-800">
                <NavLink to={'/favorite'}>Favorite</NavLink>
              </li>
              <li className=" cursor-pointer mx-2 hover:text-blue-300 hover:border-b-2 border-purple-800">
                <NavLink to={'/about'}>About</NavLink>
              </li>
            </ul>
          </div>

          {/* SEARCH  */}

          {/* FOR LARGER SCREEN SIZE  */}
          <div className=" justify-center hidden xl:flex  w-72">
            <div className="group relative  w-72 flex justify-center">
              <span className=" z-10  cursor-pointer text-lg md:text-xl absolute top-[-10px] md:bottom-2 left-4">
                <FaSearch />{" "}
              </span>
              <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                placeholder="Search Movie Here..."
                className="absolute  left-0 top-[-20px] w-[20%] rounded-full outline-none ps-12 pe-4 py-2 shadow-xl group-hover:w-[100%] group-hover:transition-all ease-in-out group-hover:duration-[0.5s] "
              />
            </div>
          </div>

          <div className="col text-white font-normal hidden lg:block">
            <Link to={"/login"}>
              <button className="flex justify-center items-center px-2 py-1 text-2xl rounded-2xl border-2 bg-purple-900 border-purple-300 hover:bg-transparent hover:border-purple-900">
                <FiLogIn className="px-1 font-bold"/><FaUser className="px-1"/>
              </button>
            </Link>
          </div>
          <div className="block lg:hidden">
          <span onClick={tooogleThis}  className="text-3xl text-blue-50">{toggle? <span>&#8801;</span>: <IoMdClose/> }</span>
                    
                    {/* <!-- Dropdown Box  --> */}

                    {
                      toggle?<></> : <div className=" z-40  absolute w-[100%] top-[44px] right-0  flex peer-hover:justify-center hover:flex  ">
                      <div className="  rounded-xl w-[95%] flex  flex-col bg-white bg-opacity-90 shadow">

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
{/* FOR SMALL SCREEN SIZE  */}
        <div className="py-1 flex justify-center items-center  xl:hidden">
        <div className=" justify-center w-[95%] ">
            <div className=" relative   w-[100%]">
              <span className="text-lg md:text-xl absolute bottom-2 md:bottom-1 lg:bottom-2 left-4">
                <FaSearch />{" "}
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search Movie Here..."
                className=" rounded-full w-[100%] h-8 lg:h-10 outline-none ps-12 py-2 shadow-xl "
              />
            </div>
          </div>
        </div>

      </nav>
    </>
  );
};

export default Header2;
