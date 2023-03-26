import { useParams, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetchMovieById } from 'API';

import {
  MovieCard,
  Title,
  Overview,
  Genres,
  SecondaryTitle,
  AdditionalInfoCard,
  Link,
  ListItem,
  List,
} from './Movie.styled';

const defaultImage =
  'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80';

const Movie = () => {
  const { movieID } = useParams();
  const [movie, setMovie] = useState({});
  console.log(movieID);

  useEffect(() => {
    async function findMovieById(movieID) {
      const results = await fetchMovieById(movieID);
      const movieToSave = {
        title: results.original_title,
        src: results.poster_path,
        year: results.release_date.slice(0, 4),
        score: Math.round(results.vote_average * 10),
        genres: results.genres.map(genre => genre.name).join(', '),
        overview: results.overview,
      };
      setMovie(movieToSave);
    }
    findMovieById(movieID);
  }, [movieID]);

  return (
    <>
      <MovieCard>
        <img
          src={
            movie.src
              ? `https://image.tmdb.org/t/p/w500/${movie.src}`
              : defaultImage
          }
          alt={movie.title}
        />
        <div>
          <div>
            <Title>
              {movie.title} ({movie.year})
            </Title>
            <p>User score: {movie.score}%</p>
          </div>
          <Overview>
            <SecondaryTitle>Overview:</SecondaryTitle>
            <p>{movie.overview}</p>
          </Overview>
          <Genres>
            <SecondaryTitle>Genres:</SecondaryTitle>
            <p>{movie.genres}</p>
          </Genres>
        </div>
      </MovieCard>
      <AdditionalInfoCard>
        <Title>Additional information</Title>
        <List>
          <ListItem>
            <Link to="cast">Cast</Link>
          </ListItem>
          <ListItem>
            <Link to="reviews">Reviews</Link>
          </ListItem>
        </List>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </AdditionalInfoCard>

      <Outlet />
    </>
  );
};

export default Movie;
