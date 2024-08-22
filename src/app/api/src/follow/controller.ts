import { followService } from "./services";
import { Request, Response } from "express";
import { createFollowInputDefinition,
    createUserInputDefinition,
    getFollowParamsDefinition,
    getFollowsQueryDefinition,
    updateFollowInputDefinition,
    updateFollowParamsDefinition ,
} from "@/models";

async function getFollows(req: Request, res: Response) {
    const query = getFollowsQueryDefinition.parse(req.query);
    const follows = await followService.getFollows(query);
    return res.status(200).json(follows);
}

async function getFollow(req: Request, res: Response) {
    const params = getFollowParamsDefinition.parse(req.params);
    const follow = await followService.getFollow(params._id);
    return res.status(200).json(follow);
}

async function createFollow(req: Request, res: Response) {
    const data = createFollowInputDefinition.parse(req.body);
    const follow = await followService.createFollow(data);
    return res.status(200).json(follow);
}

async function updateFollow(req: Request, res: Response) {
    const params = updateFollowParamsDefinition.parse(req.params);
    const data = updateFollowInputDefinition.parse(req.body);
    const follow = await followService.updateFollow(params._id, data);
    return res.status(200).json(follow);
}

export const followController = {
    getFollows,
    getFollow,
    createFollow,
    updateFollow
} as const;

