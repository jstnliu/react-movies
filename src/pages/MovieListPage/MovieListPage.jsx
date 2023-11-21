import MovieCard from "../../components/MovieCard/MovieCard";
import './MovieListPage.css'

export default function MovieListPage({ movies }) {
  return (
    <div className='container'>
      <h1>MovieListPage</h1>
      { 
        movies.map(movie => {
          return <MovieCard key={ movie.title } movie={ movie } />
        }) 
      }
    </div>
  )
}
