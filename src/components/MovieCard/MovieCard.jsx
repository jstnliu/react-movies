import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <>
     <Link to={`/movies/${ movie.title }`} className='movie-link' >
        <div style={{ 'background': `url(${ movie.posterPath }) no-repeat center center`, "WebkitBackgroundSize": "cover" }} className="item-card">
            <div className='title'>
                <h2>{ movie.title }</h2>
                <h4>{ movie.releaseDate }</h4>
            </div>
        </div>
    </Link>
    </>
  )
}
