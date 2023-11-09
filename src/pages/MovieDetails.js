import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchMoviesDetails } from 'api';
import styled from 'styled-components';
import { Loader } from "components/Loader";

const MovieDetailBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${p => p.theme.spacing(6)};
  padding: ${p => p.theme.spacing(4)};
  max-width: 1200px;
  margin: 0 auto;
`;

const AboutMovieBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(6)};
  padding: ${p => p.theme.spacing(4)};
  max-width: 800px;
  margin: 0 auto;
  font-size: 18px;
`;

const AditionalBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(1)};
  padding: ${p => p.theme.spacing(4)};
  max-width: 1200px;
  margin-left: 20px;
  font-size: 18px;
`;

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getYear = () => new Date(movie.release_date).getFullYear();

  const { movieId } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  let activeClassName = {
    color: '#245c39',
  };

  const handleClick = () => navigate(location?.state?.from ?? '/');

  useEffect(() => {
    setLoading(true);
    fetchMoviesDetails(movieId)
      .then(result => {
        setMovie(result);
      })
      .catch(error => {
        setError('Ooops, something went wrong...');
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      <>
        <button onClick={handleClick}>Go back</button>
        {/* {movie && <h3>{movie.title} </h3> } */}
        {loading && <Loader />}
        {error && <div>{error}</div>}
        {movie && (
          <MovieDetailBox>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
                width="300"
              />
            </div>
                      <AboutMovieBox> 
                          <h3>{movie.title}<span>({getYear()})</span>
              </h3>
                       
            <h3>User Score: {movie.popularity}</h3>
            <div >
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
            </AboutMovieBox>
          </MovieDetailBox>
        )}
        <hr />

        <AditionalBox>
          <h2>Additional Information</h2>
          <NavLink
            to={`/movies/${movieId}/reviews`}
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
            state={location.state}
          >
            <p>Reviews</p>
          </NavLink>

          <NavLink
            to={`/movies/${movieId}/cast`}
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
            state={location.state}
          >
            <p>Cast</p>
          </NavLink>
          <hr />
          <Outlet />
        </AditionalBox>
      </>
    </>
  );
}
