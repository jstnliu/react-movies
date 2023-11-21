import { Link } from "react-router-dom";

export default function NavBar({ user }) {
  return (
    <nav> 
        <p>Welcome, { user }</p>
        <Link to='/' >All Movies</Link>
        &nbsp; | &nbsp; 
        <Link to='/actors' >All Actors</Link>
    </nav>
  )
}
