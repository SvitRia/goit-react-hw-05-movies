// import { Link } from 'react-router-dom';
import { ListMovie, LinkMovie, MovieItem } from './MovieList.styled';
import { useLocation } from 'react-router-dom';

export const MovieList = ({ movies, prevLocation }) => {
  const location = useLocation();
  return (
    <>
      <ListMovie>
        
        {movies.map(({ id, original_title }) => (
          
          <MovieItem key={id}>
            
            <LinkMovie to={`/movies/${id}`} state={{ from: location }}>
              <h3>{original_title}</h3>
            </LinkMovie>
          </MovieItem>
        ))}
      </ListMovie>
    </>
  );
};
