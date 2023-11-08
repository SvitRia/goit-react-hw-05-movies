
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = "6a9a78d5df871c54985acb54a0d7dcd5";
const END_POINTS = {
  TRENDING: '/trending/movie/week',
  QUERYSEARCH: '/search/movie',
  MOVIEDETAILS: '/movie',
  MOVIECREDITS: '/credits',
  MOVIEREVIEWS: '/reviews',
};

export const fetchTrending = async () => {
    const response = await axios.get(`${END_POINTS.TRENDING}?api_key=${API_KEY}`);
  return response.data.results;
};

export const fetchSearchQuery = async (searchQuery) => {
  const response = await axios.get(
    `${END_POINTS.QUERYSEARCH}?api_key=${API_KEY}&query=${searchQuery}`
  );

  return response.data.results;
};

export const fetchMoviesDetails = async id => {
  const response = await axios.get(
    `${END_POINTS.MOVIEDETAILS}/${id}?api_key=${API_KEY}`
  );

  return response.data;
};

export const fetchMoviesCredits = async id => {
  const response = await axios.get(
    `/movie/${id}${END_POINTS.MOVIECREDITS}?api_key=${API_KEY}`
  );
  return response.data.cast;
};

export const fetchMoviesReviews = async (id, page = 1) => {
  const response = await axios.get(
    `/movie/${id}${END_POINTS.MOVIEREVIEWS}?api_key=${API_KEY}&page=${page}`
  );

  return response.data.results;
};