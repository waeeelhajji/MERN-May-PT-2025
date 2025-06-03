import express from "express"
import dbConnect from "./config/mongo.config.js"


const app = express()
const PORT = 5000


dbConnect()





app.listen(PORT, () => {
    console.log(`>>>>>> Listening on port: ${PORT}`)
})