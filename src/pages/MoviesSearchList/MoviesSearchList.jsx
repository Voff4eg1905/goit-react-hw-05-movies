import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieByName } from '../../API';
import MovieList from '../../components/MovieList/MovieList';
import { Input } from 'components/Input/Input';

 const MoviesSearchList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const query = searchParams.get('query');

    if (!query) return;

    async function searchMovies() {
      try {
        const { results } = await fetchMovieByName(query);
        if (results.length === 0) {
          return alert('No movie with such name');
        }
        const moviesToSave = results.map(result => ({
          id: result.id,
          title: result.title,
        }));
        setMovies(moviesToSave);
      } catch (error) {
        return alert('Something went wrong!');
      }
    }
    searchMovies();
  }, [searchParams]);

  const onSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <>
      <Input onSubmit={onSubmit} />
      {movies.length !== 0 && <MovieList movies={movies} />}
    </>
  );
};


export default MoviesSearchList;