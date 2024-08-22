import { Router } from "express";
import { postController } from "./controller";

const postRouter = Router();

postRouter.get("/", postController.getPosts);
postRouter.get("/:id", postController.getPost);
postRouter.post("/", postController.createPost);
postRouter.put("/:id", postController.updatePost);

export { postRouter };
