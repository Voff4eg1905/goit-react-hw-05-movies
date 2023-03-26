import { useState, useEffect } from 'react';
import { fetchTrending } from 'API';
import { Title } from './HomePage.styled';
import MovieList from 'components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchStartMovies() {
      const response = await fetchTrending();
      const { results } = response;
      const moviesToSave = results.map(result => ({
        id: result.id,
        title: result.title,
      }));
      setMovies(moviesToSave);
    }
    fetchStartMovies();
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      {movies.length !== 0 && <MovieList movies={movies} />}
    </>
  );
};

export default HomePage;
