import React, { useEffect, useState } from 'react';
import { FaCirclePlay } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdDelete } from "react-icons/md";


const Favorite = () => {
  const [items, setItems] = useState([]);

  // Load favorite items from local storage on component mount
  useEffect(() => {
      const favData = localStorage.getItem('favItems');
      setItems(favData ? JSON.parse(favData) : []);
  }, []);

  // Clear all favorite items
  const clearAllFavorites = () => {
    if (window.confirm("Are you sure you want to remove all items from your favorites?")) {
      localStorage.setItem('favItems', JSON.stringify([]));
      setItems([]); // Update the state to reflect the changes
      toast.info('All favorite items cleared successfully.');
    }
  };



  return (
    <div>
      <ToastContainer position="top-right" theme="light" />
      {
        items.length === 0 ?
          <div className='my-52'>
            <h1 className='text-5xl text-center text-purple-900 font-extrabold py-16'>Your Favorite List is Empty...!!</h1>
          </div>
          :
          <div className='px-4 md:px-14 lg:px-20 xl:px-24 bg-blue-100 py-8 pb-20'>
            <div className='relative'>
              <h2 className='flex text-red-800 text-xl md:text-3xl lg:text-4xl py-1 font-bold'>My Favorite List</h2>
              <hr className='border-2 border-red-600 my-1 mb-4' />
              <button onClick={clearAllFavorites} className='absolute top-0 right-0 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 flex items-center'><MdDelete className='me-2 text-xl'/> Remove All</button>
            </div>
            <div className='bg-blue-200 py-2 px-1 md:px-4 md:py-4 lg:py-6 xl:py-8 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3 lg:gap-4 shadow-md shadow-black'>
            {items.map((data,index) =>{
           return <Link key={index} to={`/view/${data.type}/${data.id}`}>
           <div key={index} className="px-1 py-2 group shadow-md cursor-pointer shadow-red-800 rounded-md " title={data.title}> 
         
         <div className=' relative overflow-hidden' >
           <div className=' rounded-md overflow-hidden'>
           <img className=' group-hover:brightness-50 group-hover:scale-110 rounded-md' src={data.image} alt={data.title} />
   
           </div>
           <span title='play' className='hidden group-hover:block absolute top-[35%] md:top-[34%] right-[35%] md:right-[34%] text-blue-600 text-3xl md:text-5xl bg-white rounded-full p-1'
          ><FaCirclePlay/></span>
         </div>
         <div className='py-1 '>
                     <h3 className='text-[10px] md:text-[13px] lg:text-[15px] font-bold hover:text-blue-900'> <>{data.title.length>20? data.title.slice(0,21) : data.title} {data.title.length>20?<span>...</span>:<></>}</> </h3>
                     <div className='flex justify-between items-center text-[8px] md:text-[12px] text-slate-600 font-medium pt-1'>
                       <p>{data.date}</p>
                       <p>Rating:{data.rate}</p>
                       <p><span className='border rounded-sm px-[1px] md:px-1 border-slate-600 text-[7px] md:text-[11px]'>{data.type}</span></p>
                     </div>
                   </div>
                 
       </div>
           </Link>
         })} 
            </div>
          </div>
      }
    </div>
  );
}

export default Favorite;
