import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const API_KEY = '9b8f0c4ec164e6dabb7e1c13a0a2a1d6';

export async function fetchTrending() {
  const response = await axios.get(`/3/trending/movie/day?api_key=${API_KEY}`);
  return response.data;
}

export async function fetchMovieByName(query) {
  const response = await axios.get(
    `/3/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response.data;
}

export async function fetchMovieById(id) {
  const response = await axios.get(`/3/movie/${id}?api_key=${API_KEY}`);
  return response.data;
}

export async function fetchMovieCast(id) {
  const response = await axios.get(`/3/movie/${id}/credits?api_key=${API_KEY}`);
  return response.data;
}

export async function fetchMovieReviews(id) {
  const response = await axios.get(`/3/movie/${id}/reviews?api_key=${API_KEY}`);
  return response.data;
}
