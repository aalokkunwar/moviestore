import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Videoplayer = () => {
  const {media_type, id } = useParams();
  const [data, setData] = useState({
    name: '',
    key: '',
    published_at: '',
    type: '',
  });
  const [errorMessage, setErrorMessage] = useState(null); // State for error message

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGNiMTk2YTYyMjBiMDkxZGFmNWY3YWRmNTg3NGY2ZCIsInN1YiI6IjY2NmQwZDIzMDAwMDAwMDAwMDgzMWMwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yKdBESAhPJTtkNJYWtUBm8D7cMo13pMfP2XeOEPYSzo',
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
       if(media_type==='movie'){
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          options
        );
        const movieData = await movieResponse.json();
        if (movieData.results.length > 0) {
          setData(movieData.results[0]);
          return; // Early return if movie video found
        }
       }

     if(media_type==='tv'){
      const tvResponse = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`,
        options
      );
      const tvData = await tvResponse.json();
      if (tvData.results.length > 0) {
        setData(tvData.results[0]);
        return; // Early return if TV show video found
      }
     }

        setErrorMessage(`Sorry..Video Doesn\'t Exist Or NO Key For This Id ${media_type}`); 
      } catch (err) {
        console.error(err); // Log any errors
        setErrorMessage(`Sorry..Video Doesn\'t Exist Or NO Key For This Id ${media_type}` ); 
      }
    };

    fetchData();
  }, [id]); 

  return (
    <div>
      {errorMessage ? (
        <>
         <div className="">
          <div className="flex justify-center items-center w-[100%] h-[60vh] my-16">
            <div className="w-[100%] md:w-[70%] h-[100%]">
            <div className='flex'>
             <Link className='text-blue-500' to={'/'}>Home</Link>/
              <Link className='text-blue-500'  to={`/view/tv/${id}`}>
              Details</Link>
             </div>
              <iframe
                className="w-[100%] h-[100%] border-[10px] border-slate-800 shadow-lg shadow-purple-900"
                src={`https://www.youtube.com/embed/${data.key}`}
                frameborder="0"
                allowFullScreen
                title={data.name || 'Trailer'} // Set title conditionally
              ></iframe>
              <div className="info flex justify-between items-center">
                <p className="border border-purple-800 rounded-md py-1 px-3 my-2">
                  <strong>Title:</strong> {data.name}
                </p>
                <p className="border border-purple-800 rounded-md py-1 px-3 my-2">
                  <strong>Published:</strong> {data.published_at.slice(0, 10)}
                </p>
                <p className="border border-purple-800 rounded-md py-1 px-3 my-2">
                  <strong>Type:</strong> {data.type}
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="error-message font-semibold text-xl text-red-600 uppercase">{errorMessage}</p> 
        {/* // Display error message */}

        </>
      ) : (
        <div className="">
          <div className="flex justify-center items-center w-[100%] h-[70vh] lg:h-[63.7vh]  my-16">
            <div className="w-[100%] md:w-[100%] lg:w-[80%] xl:w-[70%] h-[100%]">
             <div className='flex'>
             <Link className='text-blue-500' to={'/'}>Home</Link>/
              <Link className='text-blue-500'  to={`/view/movie/${id}`}>
              Details</Link>
             </div>
              <iframe
                className="w-[100%] h-[96%] lg:h-[90%] xl:h-[96%] border-[10px] border-slate-800 shadow-lg shadow-purple-900"
                src={`https://www.youtube.com/embed/${data.key}`}
                frameborder="0"
                allowFullScreen
                title={data.name || 'Trailer'} // Set title conditionally
              ></iframe>
              <div className="info flex justify-between items-center flex-wrap py-1 ">
                <p className="border border-purple-800 rounded-md py-1 px-3 my-2">
                  <strong>Title:</strong> {data.name.slice(0,25)}
                </p>
                <p className="border border-purple-800 rounded-md py-1 px-3 my-2">
                  <strong>Published:</strong> {data.published_at.slice(0, 10)}
                </p>
                <p className="border border-purple-800 rounded-md py-1 px-3 my-2">
                  <strong>Type:</strong> {data.type}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videoplayer;
