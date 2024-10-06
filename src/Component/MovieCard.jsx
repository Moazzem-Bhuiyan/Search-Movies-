import React from 'react';

const MovieCard = ({ movie }) => {
  return (

    <>
     <div className="movie-card hover:scale-125 duration-700 h-[500px] ">
      <img src={movie.posterUrl} alt={movie.title} />
      <h3 className='text-2xl font-semibold'>{movie.title}</h3>
      <p className='text-gray-400'>{movie.description}</p>
      <p><strong>Rating:</strong> {movie.rating}/10</p>
  
    
    </div>
    
    
    </>
   
    
  );
};

export default MovieCard;
