
import CakeController from "../controllers/cake.controller.js";

import { Router } from "express"


const routers = Router()
routers.route("/cakes")
    .post(CakeController.create)
    .get(CakeController.ReadAll)

routers.route("/cakes/:id")
    .get(CakeController.ReadOne)
    .patch(CakeController.UpdateCake)
    .delete(CakeController.DeleteCake)



// routers.post("/cakes", CakeController.create)
// routers.get("/cakes", CakeController.ReadAll)
// routers.get("/cakes/:id", CakeController.ReadOne)
// routers.patch("/cakes/edit/:id", CakeController.UpdateCake)
// routers.delete("/cakes/:id", CakeController.DeleteCake)





export default routers