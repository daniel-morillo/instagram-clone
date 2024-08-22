import { UpdateQuery, model } from "mongoose";
import { TPost, TUser } from "@/models";
import {
    TCreatePostInputDefinition,
    TGetPostParamsDefinition,
    TGetPostsQueryDefinition,
    TUpdatePostInputDefinition,
    TUpdatePostParamsDefinition,
    postSchema
} from "@/models";

const Post = model('Post', postSchema);

async function getPosts(filter: TGetPostsQueryDefinition = {}) {
    const posts = await Post.find(filter);
    return posts;
}

async function getPost(_id: TGetPostParamsDefinition["_id"]) {
    const post = await Post.findById(_id);
    return post
}

async function createPost(data: TCreatePostInputDefinition) {
    const post = await Post.create(data)
    return post;
}

async function updatePost(_id: TUpdatePostParamsDefinition["_id"], data: TUpdatePostInputDefinition) {
    const post = await Post.findByIdAndUpdate(_id, data)
    return post;
}

export const postService = {
    getPosts,
    getPost,
    createPost,
    updatePost
} as const;



