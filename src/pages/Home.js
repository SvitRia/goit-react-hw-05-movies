import { fetchTrending } from "api"
import { useState, useEffect } from "react"
import { MovieList } from "components/MovieList/MovieList";
import { Loader } from "components/Loader";

export default function HomePage() {
 const [movies, setMovies] = useState([]);
//   const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const fetchMoviesTrending = async () => {
        setLoading(true)
        try {
            const result = await fetchTrending();
            setMovies(result)
        }
        // fetchTrending().then(result => {
        //     setMovies(result);
        //   })
        catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        };
    };

        useEffect(() => {
            fetchMoviesTrending();
        }, []
        );
    
        return (
            <div>
                {loading && <Loader />}
                <h2>Trehding today</h2>
                {movies.length? (<MovieList movies={movies} />) : (
                    <p>There isn't any movie on this page.</p>)}
            </div>)
    }
              