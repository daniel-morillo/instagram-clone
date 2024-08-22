import { Response, Request } from "express";
import { postService } from "./services";
import { createPostInputDefinition, getPostParamsDefinition, getPostsQueryDefinition, updatePostInputDefinition, updatePostParamsDefinition } from "@/models";

async function getPosts(req: Request, res: Response) {
    const query = getPostsQueryDefinition.parse(req.query);
    const posts = await postService.getPosts(query);
    return res.status(200).json(posts);
}

async function getPost(req: Request, res: Response) {
    const params = getPostParamsDefinition.parse(req.params);
    const post = await postService.getPost(params._id);
    return res.status(200).json(post);
}

async function createPost(req: Request, res: Response) {
    const data = createPostInputDefinition.parse(req.body);
    const post = await postService.createPost(data);
    return res.status(200).json(post);
}

async function updatePost(req: Request, res: Response) {
    const params = updatePostParamsDefinition.parse(req.params);
    const data = updatePostInputDefinition.parse(req.body);
    const post = await postService.updatePost(params._id, data);
    return res.status(200).json(post);
}

export const postController = {
    getPosts,
    getPost,
    createPost,
    updatePost
} as const;