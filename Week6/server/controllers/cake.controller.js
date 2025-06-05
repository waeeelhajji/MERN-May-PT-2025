import Cake from "../models/cake.module.js"




const CakeController = {

    //! CREATE 
    create: async (req, res) => {
        try {
            console.log(req.body)
            const newCake = await Cake.create(req.body)
            res.json(newCake)
        }
        catch (err) {
            console.log(err)
            res.json(err)
        }
    },
    //! GET ALL
    ReadAll: async (req, res) => {
        try {
            const AllCakes = await Cake.find()
            res.json(AllCakes)
        } catch (err) {
            console.log(err)
            res.json(err)
        }
    },
    //! GET One
    ReadOne: async (req, res) => {
        try {
            const oneCake = await Cake.findById(req.params.id)
            res.json(oneCake)
        }
        catch (err) {
            console.log(err)
            res.json(err)
        }
    },
    //! Update One
    UpdateCake: async (req, res) => {
        const options = {
            new: true,
            runValidation: true
        }
        try {
            const UpdatedCake = await Cake.findByIdAndUpdate(req.params.id, req.body, options)
            res.json(UpdatedCake)
        }
        catch (err) {
            console.log(err)
            res.json(err)
        }
    },
    //! Delete Cake 
    DeleteCake: async (req, res) => {
        try {
            await Cake.findByIdAndDelete(req.params.id)
            res.json("The Cake is Deleted and We think someone eat it ")
        }
        catch (err) {
            console.log(err)
            res.json(err)
        }
    }












}

export default CakeController