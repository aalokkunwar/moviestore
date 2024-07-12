import React, { useEffect, useState } from 'react';
import Tvnowplayig from '../components/Tvnowplayig';
import Tvpopular from '../components/Tvpopular';

const Tvseries = () => {
  const [tv, setTv] = useState([]);
  const [popular, setPopular]= useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGNiMTk2YTYyMjBiMDkxZGFmNWY3YWRmNTg3NGY2ZCIsInN1YiI6IjY2NmQwZDIzMDAwMDAwMDAwMDgzMWMwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yKdBESAhPJTtkNJYWtUBm8D7cMo13pMfP2XeOEPYSzo'
    }
  };

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', options)
      .then(response => response.json())
      .then(data => {
        if (data && data.results) {
          setTv(data.results);
        } else {
          setTv([]); // Handle case where results might be undefined
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to fetch TV shows');
        setLoading(false);
      });

      //popular
      fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then(data => {
        if (data && data.results) {
          setPopular(data.results);
        } else {
          setPopular([]); // Handle case where results might be undefined
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to fetch TV shows');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
   <>
    <div className='px-4 md:px-14 lg:px-20 xl:px-24 bg-blue-100 py-8 pb-20'>
        <div>
            <h1 className='text-center text-black text-xl md:text-3xl lg:text-4xl py-2 font-bold my-1 mb-4'>TV SERIES</h1>
        </div>

        <div>
        <h2 className='flex text-blue-800 text-xl md:text-3xl lg:text-4xl py-1 font-bold'>Airing Today</h2>
       <hr className=' border-2 border-blue-600 my-1 mb-4'/>
      </div>

      <div className='bg-blue-200 py-2 px-1 md:px-4 md:py-4 lg:py-6 xl:py-8 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3 lg:gap-4 shadow-md shadow-black'>

      {tv.length > 0 ? (
        tv
          .filter(show => show.id !== 126433) // Filtering out the show with id '126433'
          .map((show, index) => (
            <Tvnowplayig item={show} key={show.id || index} />
          ))
      ) : (
        <div>No TV shows available</div>
      )}
     
    </div>
    </div>

{/* Popular  */}
<div className='px-4 md:px-14 lg:px-20 xl:px-24 bg-blue-100 pb-10'>
       

        <div>
        <h2 className='flex text-purple-800 text-xl md:text-3xl lg:text-4xl py-1 font-bold'>Popular</h2>
       <hr className=' border-2 border-purple-600 my-1 mb-4'/>
      </div>

      <div className='bg-purple-200 py-2 px-1 md:px-4 md:py-4 lg:py-6 xl:py-8 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3 lg:gap-4 shadow-md shadow-black'>

      {popular.length > 0 ? (
        popular
          .filter(show => show.id !== 126433) // Filtering out the show with id '126433'
          .map((show, index) => (
            <Tvpopular item={show} key={show.id || index} />
          ))
      ) : (
        <div>No TV shows available</div>
      )}
     
    </div>
    </div>


   </>
  );
};

export default Tvseries;
