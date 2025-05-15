
import './App.css'
import Ninja from './components/Ninja'

function App() {
  const x = 3;
  const message = "hello";
  const animals = ['🦁', '🦒', '🦓', '🐊'];

  const person = {
    name: "Bob",
    favFood: "🍝",
    age: 45
  };



  return (
    <fieldset>
      <legend>App.jsx</legend>
      <Ninja person={person} />

    </fieldset>
  )
}

export default App
