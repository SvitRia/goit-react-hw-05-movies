import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'api';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetchMoviesReviews(movieId);
        
        setReviews(response);
      } catch (error) {
        setError(error);
      }
    };
    fetchReviews();
  }, [movieId]);

  if (reviews.length === 0) { return <text>We havn't review for this movie</text> }
  
  return (
   
    <>
      {error && <div>{error}</div>}
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Reviews;