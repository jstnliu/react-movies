import { useState } from 'react'
import LoginPage from '../LoginPage/LoginPage'
import ActorListPage from '../ActorListPage/ActorListPage'
import MoviesListPage from '../MovieListPage/MoviesListPage'
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage'
import NavBar from '../../components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const [user, setUser] = useState(null)

  return (
      <main className = 'App'>
        REACT MOVIES
        { user ?
        <>
          <NavBar user={ user } />
          <p>Welcome, { user }</p>
          <Routes>
            <Route path='/' element={ < MoviesListPage /> } />
            <Route path='/movies/:movieName' element={ < MovieDetailPage /> } />
            <Route path='/actors' element={ < ActorListPage /> } />
          </Routes>
        </>
          :
          <LoginPage setUser={ setUser } />
        }
      </main>
  )
}

export default App
