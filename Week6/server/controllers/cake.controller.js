import Cake from "../models/cake.module.js"




const CakeController = {

    // CREATE 
    create: async (req, res) => {
        try {
            const newCake = await Cake.create(req.body)
            res.json(newCake)
        }
        catch (err) {
            console.log(err)
            res.json(err)
        }
    }











}