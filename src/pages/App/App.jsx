import { useState } from 'react'
import LoginPage from '../LoginPage/LoginPage'
import ActorListPage from '../ActorListPage/ActorListPage'
import MoviesListPage from '../MovieListPage/MoviesListPage'
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage'
import NavBar from '../../components/NavBar/NavBar'
import { Routes, Route } from 'react-router'
import './App.css'

function App() {
  const [user, setUser] = useState(null)

  return (
      <main className = 'App'>
        REACT MOVIES
        { user ?
        <>
          <NavBar />
          <Routes>
            <Route path='/movie' element={ < MoviesListPage /> } />
            <Route path='/movie/detail' element={ < MovieDetailPage /> } />
            <Route path='/actor' element={ < ActorListPage /> } />
          </Routes>
        </>
          :
          <LoginPage />
        }
      </main>
  )
}

export default App
