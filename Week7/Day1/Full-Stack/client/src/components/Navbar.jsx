import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <fieldset>
            <Link to="/cake/home">
                Home of Cakes
            </Link>
            <br />
            <Link to="/cake/create">
                Add New Cake
            </Link>

        </fieldset>
    )
}

export default Navbar