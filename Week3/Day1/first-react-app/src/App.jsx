import './App.css'
import AnotherComp from './components/AnotherComp'
function App() {

  const x = 3
  const message = "Hello"
  const animals = ['🦁', '🦒', '🦓', '🐊'];


  return (
    <fieldset>
      <legend>App.jsx</legend>
      x : {x} <br />
      wael says: {message}
      <h1>Welcome to the Home Page</h1>

      <AnotherComp aa={animals} />


    </fieldset>
  )
}

export default App
