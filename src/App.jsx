import { Route, Routes } from 'react-router-dom';
// import css from './App.module.css';
import { Suspense, lazy } from 'react';
import Loader from './components/Loader/Loader';
import Navigation from './components/Navigation/Navigation';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviePage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import ("./pages/MovieDetailsPage/MovieDetailsPage"));
const MovieCast = lazy(() => import ("./components/MovieDetails/MovieCast"));
const MovieReviews = lazy(() => import ("./components/MovieDetails/MovieReviews"));

function App() {
  return (
    <Navigation>
        <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </Suspense>
    </Navigation>
  );
}

export default App;
