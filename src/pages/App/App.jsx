import { useState } from 'react'
import LoginPage from '../LoginPage/LoginPage'
import ActorListPage from '../ActorListPage/ActorListPage'
import MovieListPage from '../MovieListPage/MovieListPage'
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage'
import NavBar from '../../components/NavBar/NavBar'
import { movies } from "../../data.js";
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
          <Routes>
            <Route path='/' element={ < MovieListPage movies={ movies } /> } />
            <Route path='/movies/:movieName' element={ < MovieDetailPage movies={ movies } /> } />
            <Route path='/actors' element={ < ActorListPage movies={ movies } /> } />
          </Routes>
        </>
          :
          <LoginPage setUser={ setUser } />
        }
      </main>
  )
}

export default App
