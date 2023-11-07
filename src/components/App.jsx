import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import  Movies  from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import  Cast  from './Cast/Cast';
import  Reviews  from './Reviews/Reviews';
import NotFoundPage  from 'pages/NotFoundPage';
const Home = lazy(() => import('pages/Home'));

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        
        <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="/cast" element={<Cast />} />
            <Route path="/reviews" element={<Reviews/>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
    </div>
  );
};
