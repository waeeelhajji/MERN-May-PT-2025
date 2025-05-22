
import './App.css'
import Home from "./components/Home"
import ErrorComp from "./components/ErrorComp"
import Hero from "./components/Hero"
import Cool from "./components/Cool"
import { Routes, Route, Link } from 'react-router-dom'

function App() {


  return (
    <fieldset>
      <h3>React Routing 📍</h3>
      {/* <a href='/home'> Home</a> */}
      <Link to="/home">Home 🏠</Link>
      <Link to="/hero">Hero 🦸‍♂️</Link>
      <Link to="/cool">Cool 😎</Link>
      {/* Theater stage */}
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/hero/:id' element={<Hero />} />
        <Route path='/cool' element={<Cool />} />
        <Route path='/error' element={<ErrorComp />} />
        <Route path='*' element={<ErrorComp />} />
      </Routes>


    </fieldset>
  )
}

export default App
