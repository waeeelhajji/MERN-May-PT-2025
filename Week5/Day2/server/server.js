import express from "express"
import mongoose from "mongoose"

const app = express()
const PORT = 5000



mongoose.connect("mongodb+srv://root:root@cluster-mern.nqovtuy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-MERN")
    .then(() => { console.log("🦄🦄🦄🦄 Established a connection to the database") })
    .catch(err => console.log("❌❌❌❌❌ Something went wrong when connecting to the database", err))





app.listen(PORT, () => {
    console.log(`>>>>>>>>>>>>>> Listening  on port : ${PORT}`)
})