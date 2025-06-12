import { Schema, model } from "mongoose"



const CakeSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Please put the {PATH} of your Cake!"],
            minlenght: [3, "please make sure the {PATH} is ate least 3 char!"],
            maxlength: [40, "please use in the {PATH} at maximum car is 40"]
        },
        imgUrl: {
            type: String,
            required: [true, "you need to have Image for your Cake"]
        },
        layers: {
            type: Number,
            default: 2
        },
        hasFrosting: {
            type: Boolean,
            default: false
        }
    }
)

const Cake = model("Cake", CakeSchema)
export default Cake