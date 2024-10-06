import React, { useState } from 'react';

import './App.css';
import SearchBar from './Component/SearchList';
import MovieList from './Component/Movielist';

const moviesData = [
  { id: 1, title: 'Inception', rating: 8.8, description: 'A mind-bending thriller.', posterUrl: 'https://i.ibb.co.com/WkW2TSH/download-1.jpg' },
  { id: 2, title: 'Interstellar', rating: 8.6, description: 'A journey beyond the stars.', posterUrl: 'https://i.ibb.co.com/nktv943/download-2.jpg' },
  { id: 3, title: 'The Dark Knight', rating: 9.0, description: 'The rise of the Dark Knight.', posterUrl: 'https://i.ibb.co.com/RYY0Jqh/download-3.jpg' },
  { id: 4, title: 'Pulp Fiction', rating: 8.9, description: 'An intertwined story of crime and redemption.', posterUrl: 'https://i.ibb.co.com/zX9Km9z/download-4.jpg' },
  { id: 5, title: 'The Godfather', rating: 9.2, description: 'A powerful story of family and crime.', posterUrl: 'https://i.ibb.co.com/GsmFFsD/download-5.jpg' },
  { id: 6, title: 'The Matrix', rating: 8.7, description: 'A hacker discovers the nature of reality.', posterUrl: 'https://i.ibb.co.com/yWk0SSF/download-6.jpg' },
  { id: 7, title: 'Fight Club', rating: 8.8, description: 'An underground fight club changes the life of an ordinary man.', posterUrl: 'https://i.ibb.co.com/HDMdRqd/download-7.jpg' },
  { id: 8, title: 'Avatar', rating: 7.8, description: 'A marine on an alien planet fights to save his people.', posterUrl: 'https://i.ibb.co.com/vzBzTND/download-8.jpg' },
  { id: 9, title: 'Forrest Gump', rating: 8.8, description: 'The extraordinary life of a simple man.', posterUrl: 'https://i.ibb.co.com/kyYmj9w/download-9.jpg' },
  { id: 10, title: 'The Avengers', rating: 8.0, description: 'Earth’s mightiest heroes team up to save the world.', posterUrl: ' https://i.ibb.co.com/ZBCZzRt/download-12.jpg' }, 
  { id: 11, title: 'Joker', rating: 8.4, description: 'A man spirals into insanity in Gotham City.', posterUrl: 'https://i.ibb.co.com/3WQ1g8t/download-13.jpg' },
  { id: 12, title: 'Parasite', rating: 8.6, description: 'A dark social commentary on class differences.', posterUrl: 'https://i.ibb.co.com/Z8NhQqC/download-14.jpg' },
  { id: 13, title: 'The Shawshank Redemption', rating: 9.3, description: 'A story of hope and friendship inside a prison.', posterUrl: 'https://i.ibb.co.com/7kKzbhC/download-15.jpg' },
  { id: 14, title: 'Gladiator', rating: 8.5, description: 'A Roman general seeks revenge after being betrayed.', posterUrl: 'https://i.ibb.co.com/pPTn4p8/download-16.jpg' },
  { id: 15, title: 'The Lion King', rating: 8.5, description: 'A young lion prince flees his kingdom after the murder of his father.', posterUrl: 'https://i.ibb.co.com/2nVYsmj/download-17.jpg' },
  { id: 16, title: 'Titanic', rating: 7.8, description: 'A romance set against the ill-fated voyage of the RMS Titanic.', posterUrl: 'https://i.ibb.co.com/1KT0xrq/download.jpg' },
  { id: 17, title: 'The Lord of the Rings: The Fellowship of the Ring', rating: 8.8, description: 'A hobbit and his friends set out to destroy the One Ring.', posterUrl: 'https://i.ibb.co.com/pPTn4p8/download-16.jpg' },
  { id: 18, title: 'Star Wars: Episode IV - A New Hope', rating: 8.6, description: 'A young farm boy becomes a Jedi knight to save the galaxy.', posterUrl: 'https://i.ibb.co.com/2nVYsmj/download-17.jpg' },
  { id: 19, title: 'The Silence of the Lambs', rating: 8.6, description: 'A young FBI agent seeks the help of a cannibalistic serial killer to catch another killer.', posterUrl: 'https://i.ibb.co.com/z2x6d2N/download-10.jpg' },
  { id: 20, title: 'Schindler\'s List', rating: 8.9, description: 'The story of a man who saved over a thousand Jewish lives during the Holocaust.', posterUrl: 'https://i.ibb.co.com/Kx34J5z/download-11.jpg' },
];

const App = () => {
  const [query, setQuery] = useState('');

  const filteredMovies = moviesData.filter(movie => 
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="app">
      <h1 className='text-4xl'>Movie Explorer</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
