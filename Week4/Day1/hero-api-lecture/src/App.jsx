import { useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  //!               function to change state
  //!      state var      |
  //!         V          V
  const [Heroes, setHeroes] = useState([])



  const FetchData = () => {
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then((res) => {
        return res.json()
      })
      .then((resJson) => {
        console.log(resJson)
        setHeroes(resJson)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const AxiosData = () => {
    axios.get("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then((res) => {
        // ! AXIOS wraps the response inside the .data key
        console.log(res.data)
        setHeroes(res.data)
      }).catch(err => {
        console.log(err)
      })
  }





  return (
    <>
      <fieldset>
        <legend>App.jsx</legend>
        <h1>SuperHeroes 🦸🦸‍♂️</h1>
        <br />
        <button onClick={FetchData}>Fetch Heroes</button>
        <button onClick={AxiosData}>Axios Heroes</button>

        <table>
          <thead>
            <tr>
              <th>Images</th>
              <th>Name</th>
              <th>full Name</th>
              <th>publisher</th>
            </tr>
          </thead>
          <tbody>
            {
              Heroes.map((hero) => {
                return (
                  <tr key={hero.id}>
                    <td> <img src={hero.images.sm} /></td>
                    <td>{hero.name}</td>
                    <td>{hero.biography.fullName ? hero.biography.fullName : "UNKNOWN"}</td>
                    <td>{hero.biography.publisher}</td>
                  </tr>
                )
              })
            }






          </tbody>
        </table>





      </fieldset>
    </>
  )
}

export default App
