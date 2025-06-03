import { connect } from "mongoose";

const MONGO_URI = "mongodb+srv://root:root@cluster-mern.nqovtuy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-MERN"
const dbName = "CakeDB"


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

