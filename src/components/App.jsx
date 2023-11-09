import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout'
// import NotFoundPage  from 'pages/NotFoundPage';
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'))
const MovieDetails = lazy(() => import('pages/MovieDetails'))
const Cast = lazy(() => import('./Cast/Cast'))
const Reviews = lazy(() => import('./Reviews/Reviews'))

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 24,
        color: '#010101'
      }}
    >
      
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>
          {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Route>
      </Routes>
    
    </div>
  );
};
