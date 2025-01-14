import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import Movie from './pages/Movie'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalContext from './contexts/globalContext'
import { useState } from 'react'

function App() {

  const [loading, setLoading] = useState(true);

  return (
    <GlobalContext.Provider value={{loading, setLoading}}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="movies/:id" element={<Movie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App
