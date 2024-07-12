import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";
import { FaCirclePause } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
   
   
<footer className='bg-purple-800'>
<div className=" p-2 flex justify-between items-center ">
          <div className="col1 text-white group ">
            <>
            
              
              <Link to={'/'} >
              <h2 className="flex justify-start items-center text-lg lg:text-2xl font-semibold cursor-pointer shadow">
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
          <div className="col2  ">
            <div className='flex justify-between text-lg'>
              <div title='Facebook' className='text-blue-800 rounded-full p-1 bg-slate-200 cursor-pointer hover:text-white hover:bg-blue-900'>
              <FaFacebook/>
              </div>
              <div title='Instagram' className='text-red-800 rounded-full p-1 mx-2 bg-slate-200 cursor-pointer hover:text-white hover:bg-red-900'>
              <FaInstagram/>
              </div>
              <div title='Twitter' className='text-blue-950 rounded-full p-1 bg-slate-200 cursor-pointer hover:text-white hover:bg-blue-900'>
              <FaXTwitter/>
              </div>
              <div title='Linkedin' className='text-blue-800 rounded-full p-1 mx-2 bg-slate-200 cursor-pointer hover:text-white hover:bg-blue-900'>
              <FaLinkedin/>
              </div>
              <div title='Discord' className=' text-black rounded-full p-1 bg-slate-200 cursor-pointer hover:text-white hover:bg-black'>
              <FaDiscord/>
              </div>
            </div>
          </div>
     
        </div>
        <div className='text-white py-1'>
         <p className='text-center'> &copy; 2024 All rights reserved || MovieStore</p> 
        </div>
</footer>

    </div>
  )
}

export default Footer
