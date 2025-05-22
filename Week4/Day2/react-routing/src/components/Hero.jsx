import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"




const Hero = () => {
    const { id } = useParams()
    const nav = useNavigate()
    console.log(id)
    const [hero, setHero] = useState(null)

    const BaseURL = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/"

    const GetHero = () => {
        axios.get(BaseURL + id + ".json")
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)

            })

    }
    useEffect(() => {
        axios.get(BaseURL + id + ".json")
            .then((res) => {
                console.log(res.data)
                setHero(res.data)
            })
            .catch((err) => {
                console.log(err)
                nav("/error")
            })
    }, [])


    return (
        <fieldset>
            <legend>Hero component</legend>
            {
                hero ?
                    <>
                        <h2>{hero.name}</h2>
                        <img src={hero.images.sm} alt={hero.name} />
                    </> : <h3>Loading ...</h3>
            }

        </fieldset>
    )
}

export default Hero