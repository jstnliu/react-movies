import { Link } from "react-router-dom";

export default function MovieListPage() {
  return (
    <>
    <h1>MovieListPage</h1>
    <Link to='/movies/:movieName' >Movie Details</Link>
    </>
)
}
