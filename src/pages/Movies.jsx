import React, { useEffect, useState } from 'react'
import TopRated from '../components/TopRated'

import ComingSoon from '../components/ComingSoon'

const Movies = () => {

    const [apiData, setApiData]=useState([])

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGNiMTk2YTYyMjBiMDkxZGFmNWY3YWRmNTg3NGY2ZCIsInN1YiI6IjY2NmQwZDIzMDAwMDAwMDAwMDgzMWMwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yKdBESAhPJTtkNJYWtUBm8D7cMo13pMfP2XeOEPYSzo'
      }
    };
    
   
      useEffect(()=>{
  
        fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',options)
        .then(response => response.json())
        .then(response => setApiData(response.results))
        .catch(err => console.error(err));
  
      })

  return (
   <>
    <div>
      <TopRated/>
    </div>
    <div className='px-4 md:px-14 lg:px-20 xl:px-24 bg-blue-100 py-8'>
    <div className='bg-blue-200 py-2 px-1 md:px-4 md:py-4 lg:py-6 xl:py-8 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3 lg:gap-4 shadow-md shadow-black'>

      
{
  apiData.slice(0,12).map((propJanewala , i) => (
    <ComingSoon item={propJanewala} key={i} />
  ))
}


</div>
</div>

  
   </>
  )
}

export default Movies
