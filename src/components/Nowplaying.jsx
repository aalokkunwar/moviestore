import React, { useEffect, useState } from 'react'
import { FaCirclePlay } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Nowplaying = () => {

  const [apiData, setApiData]=useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGNiMTk2YTYyMjBiMDkxZGFmNWY3YWRmNTg3NGY2ZCIsInN1YiI6IjY2NmQwZDIzMDAwMDAwMDAwMDgzMWMwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yKdBESAhPJTtkNJYWtUBm8D7cMo13pMfP2XeOEPYSzo'
    }
  };
  
 
    useEffect(()=>{

      fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US&page=1',options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));

    })

  return (
    < >
     <div className='px-4 md:px-14 lg:px-20 xl:px-24 bg-blue-100 py-8'>
     <div>
        <h2 className='flex text-black text-xl md:text-3xl lg:text-4xl py-1 font-bold my-1 mb-4'>You May Also Like</h2>
      </div>
      <div className='bg-blue-200 py-2 px-1 md:px-4 md:py-4 lg:py-6 xl:py-8 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3 lg:gap-4 shadow-md shadow-black'>
      {apiData.map((data,index) =>{
        return <Link key={index} to={`/view/${data.media_type}/${data.id}`}>
<div key={index} className="px-1 py-2 group shadow-md cursor-pointer shadow-red-800 rounded-md " title={data.original_title || data.name}> 
      
      <div className=' relative overflow-hidden' >
        <div className=' rounded-md overflow-hidden'>
        <img className=' group-hover:brightness-50 group-hover:scale-110 rounded-md' src={`https://image.tmdb.org/t/p/w500`+data.poster_path} alt="" />

        </div>
        <span title='play' className='hidden group-hover:block absolute top-[35%] md:top-[34%] right-[35%] md:right-[34%] text-blue-600 text-3xl md:text-5xl bg-white rounded-full p-1'
       ><FaCirclePlay/></span>
      </div>
      <div className='py-1 '>
                  <h3 className='text-[10px] md:text-[13px] lg:text-[15px] font-bold hover:text-blue-900'> < >{(data.title || data.name)}</> </h3>
                  <div className='flex justify-between items-center text-[8px] md:text-[12px] text-slate-600 font-medium pt-1'>
                    <p>{new Date(data.release_date || data.first_air_date).getFullYear()}</p>
                    <p>Rating:{Math.round(data.vote_average * 10) / 10}</p>
                    <p><span className='border rounded-sm px-[1px] md:px-1 border-slate-600 text-[7px] md:text-[11px]'>{data.media_type}</span></p>
                  </div>
                </div>

    </div>
      </Link>
      })}  
      </div>
      
     </div>

   

     
    </>
  )
}

export default Nowplaying
