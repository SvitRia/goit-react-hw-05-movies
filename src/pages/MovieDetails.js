import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchMoviesDetails } from 'api';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getYear = () => new Date(movie.release_date).getFullYear();

  const { movieId } = useParams();

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

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
        {loading && 'Loading ...'}
        {error && <div>{error}</div>}
        {movie && (
          <div>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
                      <div> 
              <h3>{movie.title}</h3>
                          <p>({getYear()})</p>
                          <div></div>
                          
            <h3>User Score: {movie.popularity}</h3>
            <div >
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
            </div>
          </div>
        )}
        <hr />

        <div>
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
        </div>
      </>
    </>
  );
}
