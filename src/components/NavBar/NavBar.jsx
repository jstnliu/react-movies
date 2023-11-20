import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav> 
        <Link to='/movie' >All Movies</Link>
        &nbsp; | &nbsp; 
        <Link to='/actor' >All Actors</Link>
    </nav>
  )
}
