import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const OneCake = () => {
    const nav = useNavigate()

    const { id } = useParams()
    console.log(id)
    const [oneCake, setOneCake] = useState(null)


    useEffect(() => {
        axios.get("http://localhost:5000/api/cakes/" + id)
            .then(res => {
                console.log(res.data)
                setOneCake(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])







    return (
        <div>
            {
                oneCake ? <ul>
                    <li>{oneCake.name}</li>
                    <li><img src={oneCake.imgUrl} alt={oneCake.name} height="200px" /></li>
                </ul> : <h3>Loading ...</h3>
            }
            <button onClick={() => { nav("/cake/update/" + oneCake._id) }}>Update</button>

        </div>
    )
}

export default OneCake