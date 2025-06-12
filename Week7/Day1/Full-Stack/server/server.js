import express from "express"
import dbConnect from "./config/mongo.config.js"
import routes from "./routes/cake.routes.js"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()


const app = express()
const PORT = process.env.PORT
app.use(express.json(), cors())
app.use("/api", routes)


dbConnect()





app.listen(PORT, () => {
    console.log(`>>>>>> Listening on port: ${PORT}`)
})