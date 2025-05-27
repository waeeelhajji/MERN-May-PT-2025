//~ ES6
import express from "express"
//~ ES5
// const express = require("express")

// console.log(express)
const app = express()
const PORT = 5000
// console.log(app)


//! -- MIDDLEWARE -- 
app.use(express.json());

// fake db
const users = [
    { firstName: "Reimu", lastName: "Hakurei", id: 0 },
    { firstName: "Marisa", lastName: "Kirisame", id: 1 },
    { firstName: "Sanae", lastName: "Kochiya", id: 2 },
    { firstName: "Sakuya", lastName: "Izayoi", id: 3 },
    { firstName: "Momiji", lastName: "Inubashiri", id: 4 }
];

//? === Routing ====

//!--READ ALL
//?------------------Request,Response
app.get("/api/users", (req, res) => {
    res.json(users)

})



//! CREATE
app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or from React later
    console.log(req.body)
    users.push(req.body)
    res.json(users)
})




app.listen(PORT, () => console.log(`Server is running now the PORT : ${PORT}`))