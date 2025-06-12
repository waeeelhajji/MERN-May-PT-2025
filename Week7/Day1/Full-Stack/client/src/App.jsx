
import './App.css'
import Home from './Views/Home'
import Form from './Views/Form'
import OneCake from './Views/OneCake'
import Update from './Views/Update'
import Navbar from "./components/Navbar"
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <h1>Welcome to the Kingdom of Cakes 🍥🎂🍰</h1>
      <Navbar />
      <Routes>
        <Route path="/cake/create" element={<Form />} />
        <Route path="/cake/home" element={<Home />} />
        <Route path="/cake/:id" element={<OneCake />} />
        <Route path="/cake/update/:id" element={<Update />} />
      </Routes>


    </>
  )
}

export default App
