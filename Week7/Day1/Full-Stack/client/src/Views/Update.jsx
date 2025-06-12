import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const nav = useNavigate()
    const { id } = useParams()
    console.log(id)
    const [oneCake, setOneCake] = useState(null)
    const [name, setName] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [layers, setLayers] = useState(1)
    const [hasFrosting, setHasFrosting] = useState(false)
    const [errorHandler, setErrorHandler] = useState({})




    const SubmitHandler = (e) => {
        e.preventDefault()
        const newData = {
            name,
            imgUrl,
            layers: layers,
            hasFrosting
        }
        axios.put("http://localhost:5000/api/cakes/" + id, newData)
            .then(res => {
                console.log("✅✅✅", res.data)
                nav("/cake/home")
            })
            .catch(err => {
                console.log("❌❌❌", err.response.data.errors)
                setErrorHandler(err.response.data.errors)
                console.log(errorHandler.name.message)
            })
    }


    useEffect(() => {
        axios.get("http://localhost:5000/api/cakes/" + id)
            .then(res => {
                console.log(res.data)
                setOneCake(res.data)
                setName(res.data.name)
                setLayers(res.data.layers)
                setImgUrl(res.data.imgUrl)
                setHasFrosting(res.data.hasFrosting)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])







    return (
        <div>

            <h3>Update Cakes</h3>
            name : {JSON.stringify(name)} <br />
            imgUrl : {JSON.stringify(imgUrl)} <br />
            layers : {JSON.stringify(layers)} <br />
            hasFrosting : {JSON.stringify(hasFrosting)} <br />
            <form onSubmit={SubmitHandler}>
                <div>
                    <label> Cake Name :</label><br />
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    {errorHandler.name && <p>{errorHandler.name.message}</p>}
                </div>
                <div>
                    <label> Cake Image :</label><br />
                    <input type="text" value={imgUrl} onChange={e => setImgUrl(e.target.value)} />
                    {errorHandler.imgUrl && <p>{errorHandler.imgUrl.message}</p>}
                </div>
                <div>
                    <label>  How many Layers do the cake have ?</label><br />
                    <input type="number" value={layers} onChange={e => setLayers(e.target.value)} />
                </div>
                <div>
                    <label > Has Frosting  ?</label>
                    <input type="checkbox" value={hasFrosting} onChange={e => setHasFrosting(e.target.checked)} />
                </div>
                <button> Update Cake</button>
            </form>




        </div>
    )
}

export default Update