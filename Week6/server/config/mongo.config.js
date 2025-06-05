import { connect } from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const MONGO_URI = process.env.MONGO_URI
const dbName = process.env.dbName


async function dbConnect() {
    try {
        await connect(MONGO_URI, {
            dbName,
        })
        console.log(`📡📡📡📡 You successfully connect to ${dbName} BD`)
    }
    catch (error) {
        console.log(error)
        throw (error)
    }

}

export default dbConnect

