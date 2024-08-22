import { Router } from "express";
import { followController } from "./controller";

const followRouter = Router();

followRouter.get("/", followController.getFollows);
followRouter.get("/:id", followController.getFollow);
followRouter.post("/", followController.createFollow);
followRouter.put("/:id", followController.updateFollow);

export { followRouter };