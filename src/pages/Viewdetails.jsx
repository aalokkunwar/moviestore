import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaPlay, FaPlus, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import Nowplaying from '../components/Nowplaying';
import { AiFillPlayCircle } from "react-icons/ai";
import { BsCameraVideoFill, BsBadgeHd } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdDelete } from "react-icons/md";


const Viewdetails = () => {
    const { media_type, id } = useParams(); // Extract media_type and id from URL parameters
    const [details, setDetails] = useState(null); // Initialize details as null or {}
    const [fav, setFav] = useState('Add To Favorite');

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGNiMTk2YTYyMjBiMDkxZGFmNWY3YWRmNTg3NGY2ZCIsInN1YiI6IjY2NmQwZDIzMDAwMDAwMDAwMDgzMWMwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yKdBESAhPJTtkNJYWtUBm8D7cMo13pMfP2XeOEPYSzo'
        }
    };

    useEffect(() => {
        if (id && media_type) {
            const fetchUrl = media_type === 'movie'
                ? `https://api.themoviedb.org/3/movie/${id}?language=en-US`
                : `https://api.themoviedb.org/3/tv/${id}?language=en-US`;

            fetch(fetchUrl, options)
                .then(response => response.json())
                .then(data => {
                    console.log('Fetched data:', data); // Log the data to understand its structure
                    setDetails(data);
                    checkIfFavorite(data); // Check if the item is in favorites when data is fetched
                })
                .catch(err => console.error('Error fetching data:', err));
        }
    }, [id, media_type]); // Add id and media_type to the dependency array

    const checkIfFavorite = (data) => {
        const favItems = JSON.parse(localStorage.getItem("favItems")) || [];
        const existingItem = favItems.find((item) => item.id === data.id);
        if (existingItem) {
            setFav('Remove From Favorite');
        } else {
            setFav('Add To Favorite');
        }
    };

    const handleFavoriteToggle = () => {
        const favItems = JSON.parse(localStorage.getItem("favItems")) || [];
        const itemIndex = favItems.findIndex((item) => item.id === details.id);

        if (itemIndex !== -1) {
            // Item exists, so remove it
            favItems.splice(itemIndex, 1);
            localStorage.setItem("favItems", JSON.stringify(favItems));
            toast.info(`${media_type === 'tv' ? 'TV Series' : 'Movie'} Removed from your favorite list`);
            setFav('Add To Favorite');
        } else {
            // Item does not exist, so add it
            const newItem = {
                id: details.id,
                title: details.title || details.name,
                type: media_type,
                image: `https://image.tmdb.org/t/p/w500` + details.poster_path,
                rate: Math.round(details.vote_average * 10) / 10,
                date: new Date(details.release_date || details.first_air_date).getFullYear()
            };
            favItems.push(newItem);
            localStorage.setItem("favItems", JSON.stringify(favItems));
            toast.success(`${media_type === 'tv' ? 'TV Series' : 'Movie'} Added to your favorite list`);
            setFav('Remove From Favorite');
        }
    };

    if (!details) {
        return <p className='text-5xl text-blue-700 text-center font-bold py-96'>Loading Please Wait...</p>;
    }

    // genre 
    const genreMapping = {
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Science Fiction",
        10770: "TV Movie",
        53: "Thriller",
        10752: "War",
        37: "Western"
    };

    // Convert genre IDs to names
    const genres = (details.genres || []).map(genre => genreMapping[genre.id] || genre.name).join(", ");

    const languageMap = {
        'en': 'English',
        'ko': 'Korean',
        'hi': 'Hindi',
        'es': 'Spanish',
        'ja': 'Japanese'
        // Add more mappings as needed
    };

    // For a single language code
    const languageCode = details.original_language; // e.g., 'en'
    const languageName = languageMap[languageCode] || languageCode; // Fallback to the code itself if no mapping

    return (
        <div>
            <ToastContainer position="top-right" theme="light" />
            <div className='bg-slate-400 flex justify-center items-center'>
                <div className='w-[100%] relative'>
                    <img className='blur-[8px] h-[90vh] w-[100%]' src={`https://image.tmdb.org/t/p/w500` + details.backdrop_path} alt={media_type === 'movie' ? details.title : details.name} />
                    <Link to={`/play/${media_type}/${details.id}`}>
                        <button className='absolute top-[30%] left-[44%] md:left-[48%] z-10'>
                            <AiFillPlayCircle className='bg-white rounded-full border-4 border-blue-800 text-blue-800 text-6xl' />
                        </button>
                    </Link>
                </div>
            </div>

            <div className='flex justify-center'>
                <div className='bg-white shadow-md shadow-black p-6 w-[90%] rounded-2xl -translate-y-48 grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-16'>
                    <div className='col lg:w-[220px] flex justify-center lg:block'>
                        <div className='w-[100%] md:w-[50%] lg:w-[100%]'>
                            <img className='rounded-xl shadow-md shadow-inherit lg:w-[220px]' src={`https://image.tmdb.org/t/p/w500` + details.poster_path} alt="poster" />
                            <div className='pt-4 pb-1'>
                                <p className='text-lg text-blue-700 font-medium'>{details.vote_average.toFixed(2)} <span className='text-[12px] text-slate-700 font-normal '>/ {details.vote_count} votes</span></p>
                            </div>
                            <div className='h-1 rounded-sm w-[100%] bg-slate-950 overflow-hidden'>
                                <div className='h-1 bg-blue-700' style={{ width: `${details.vote_average * 10}%` }}></div>
                            </div>
                            <div className='pt-4 flex justify-between'>
                                <button className='flex justify-center items-center text-white font-medium bg-blue-500 rounded-lg py-[2px] px-2 text-[9px] md:text-[12px]'><span className='pe-1'><FaThumbsUp /></span> Like</button>
                                <button className='flex justify-center items-center text-white font-medium bg-slate-500 rounded-lg py-[2px] px-2 text-[9px] md:text-[12px]'><span className='pe-1'><FaThumbsDown /></span> Dislike</button>
                            </div>
                        </div>
                    </div>
                    <div className='col lg:col-span-3 lg:ps-5 xl:ps-0 xl:-translate-x-10'>
                        <div className='flex justify-between text-[12px] md:text-[16px]'>
                            <button className='flex justify-center items-center bg-blue-800 text-white font-semibold rounded-2xl py-[5px] px-3 hover:bg-blue-900'> <FaPlay /> <span className='ps-2'>Watch Now</span> </button>
                            <button onClick={handleFavoriteToggle} className=' bg-slate-300 text-slate-800 font-semibold rounded-2xl py-[5px] px-3 hover:bg-slate-400'> {
                                fav==='Add To Favorite'?<div className='flex justify-center items-center' ><FaPlus /> <span className='ps-2 '>{fav} </span></div> :
                                <p className='flex justify-center items-center text-red-900 font-semibold'><MdDelete /> <span className='ps-2'>{fav} </span> </p>
                                } </button>
                        </div>
                        <h1 className='text-2xl font-semibold py-4'>{media_type === 'movie' ? details.title : details.name}</h1>
                        <div className='flex gap-3'>
                            <button className='border-[1px] border-black rounded-lg px-2 mb-4 flex items-center hover:bg-black hover:text-white'> <BsCameraVideoFill className='px-1 text-3xl' /> Trailer</button>
                            <button className='border-[1px] border-black rounded-md px-2 mb-4 flex items-center hover:bg-black hover:text-white'> <BsBadgeHd className='px-1 text-3xl' /></button>
                        </div>
                        <h2><span className='font-medium underline'>Description</span></h2>
                        <p>{details.overview}</p>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10'>
                            <div>
                                <ul className='py-4'>
                                    <li><span className='font-medium'>Release Date:</span> {media_type === 'movie' ? details.release_date : details.first_air_date}</li>
                                    <li><span className='font-medium'>Category:</span> {media_type === 'movie' ? 'Movie' : 'TV Series'}</li>
                                    {media_type === 'movie' && <li><span className=' font-medium'>Runtime:</span> {(details.runtime / 60).toFixed()} Hours {details.runtime % 60} Minutes</li>}
                                    {media_type === 'tv' && (
                                        <>
                                            <li><span className='font-medium'>Number of Seasons:</span> {details.number_of_seasons}</li>
                                            <li><span className='font-medium'>Number of Episodes:</span> {details.number_of_episodes}</li>
                                        </>
                                    )}
                                </ul>
                            </div>
                            <div>
                                <ul className='py-4'>
                                    <li><span className='font-medium'>Language:</span> {languageName}</li>
                                    <li><span className='font-medium'>Genres:</span> {genres}</li>
                                    <li><span className='font-medium'>Popularity:</span> {details.popularity}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='-translate-y-16'>
                <Nowplaying />
            </div>
        </div>
    );
};

export default Viewdetails;
