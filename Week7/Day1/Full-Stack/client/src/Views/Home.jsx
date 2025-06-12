import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"

const Home = () => {

    const [cakes, setCakes] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/api/cakes/")
            .then(res => {
                console.log(res)
                setCakes(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    const deleteCake = (id) => {
        axios.delete("http://localhost:5000/api/cakes/" + id)
            .then(res => {
                console.log(res)
                setCakes(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <fieldset>
            <h3>All Cakes </h3>
            {/* {JSON.stringify(cakes)} */}

            <table>
                <thead>
                    <tr>
                        <th>
                            name
                        </th>
                        <th>
                            Image of the Cake
                        </th>
                        <th>
                            Cake Layers
                        </th>
                        <th>
                            Has Frosting or Not
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cakes.map((oneCake) => {
                            return (
                                <tr key={oneCake._id}>
                                    <td>
                                        <Link to={"/cake/" + oneCake._id}>
                                            {oneCake.name}
                                        </Link>


                                    </td>
                                    <td>
                                        <img src={oneCake.imgUrl} alt={oneCake.name} height="200px" />
                                    </td>
                                    <td>
                                        {oneCake.layers}~Layers in this Cake
                                    </td>
                                    <td>
                                        {oneCake.hasFrosting ? "✅" : "❌"}
                                    </td>

                                    <td>
                                        <button onClick={() => { deleteCake(oneCake._id) }}>Delete Cake</button>
                                    </td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default Home