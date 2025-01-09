import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import Movie from './pages/Movie'
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Movie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
