import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesSearchList = lazy(() =>
  import('pages/MoviesSearchList/MoviesSearchList')
);
const Movie = lazy(() => import('pages/Movie/Movie'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));

// import SharedLayout from './SharedLayout/SharedLayout';
// import Reviews from './Reviews/Reviews';
// import Cast from './Cast/Cast';
// import HomePage from 'pages/HomePage/HomePage';
// import Movie from 'pages/Movie/Movie';
// import MoviesSearchList from 'pages/MoviesSearchList/MoviesSearchList';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesSearchList />}></Route>
          <Route path="/movies/:movieID" element={<Movie />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};
