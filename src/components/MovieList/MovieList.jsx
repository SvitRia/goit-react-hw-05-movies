// import { Link } from 'react-router-dom';
import { ListMovie, LinkMovie, MovieItem } from './MovieList.styled';

export const MovieList = ({ movies, prevLocation }) => {
  return (
    <>
      <ListMovie>
        {movies.map(({ id, original_title }) => (
          <MovieItem key={id}>
            <LinkMovie to={`/movies/${id}`} state={{ from: prevLocation }}>
              <h3>{original_title}</h3>
            </LinkMovie>
          </MovieItem>
        ))}
      </ListMovie>
    </>
  );
};
