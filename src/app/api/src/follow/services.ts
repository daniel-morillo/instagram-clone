import { UpdateQuery, model } from "mongoose";
import { TUser, TFollow,
    TCreateFollowInputDefinition,
    TCreateUserInputDefinition,
    TGetFollowParamsDefinition,
    TGetFollowsQueryDefinition,
    TUpdateFollowInputDefinition,
    TUpdateFollowParamsDefinition,
    followSchema
} from "@/models";

const Follow = model('Follow',followSchema);

async function getFollows(filter: TGetFollowsQueryDefinition = {}) {
    const follows = await Follow.find(filter);
    return follows;
}

async function getFollow(_id: TGetFollowParamsDefinition["_id"]) {
    const follow = await Follow.findById(_id);
    return follow;
}

async function createFollow(data: TCreateFollowInputDefinition) {
    const follow = await Follow.create(data);
    return follow;
}

async function updateFollow(_id: TUpdateFollowParamsDefinition["_id"], data: TUpdateFollowInputDefinition) {
    const follow = await Follow.findByIdAndUpdate(_id, data);
    return follow;
}

export const followService = {
    getFollows,
    getFollow,
    createFollow,
    updateFollow
} as const;
