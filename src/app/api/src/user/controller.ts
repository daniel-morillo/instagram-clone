import { createUserInputDefinition,
    getUserParamsDefinition,
    getUsersQueryDefinition,
    TCreateUserInputDefinition,
    updateUserInputDefinition,
    updateUserParamsDefinition
} from "@/models";
import { Request, Response } from "express";
import { userService } from "./services";

async function getUsers(req: Request, res: Response) {
    const query = getUsersQueryDefinition.parse(req.query);
    const users = await userService.getUsers(query);
    return res.status(200).json(users);
}

async function getUser(req: Request, res: Response) {
    const params = getUserParamsDefinition.parse(req.params);
    const user = await userService.getUser(params._id);
    return res.status(200).json(user);
}

async function createUser(req: Request, res: Response) {
    const data = createUserInputDefinition.parse(req.body);
    const user = await userService.createUser(data);
    return res.status(200).json(user);
}

async function updateUser(req: Request, res: Response) {
    const params = updateUserParamsDefinition.parse(req.params);
    const data = updateUserInputDefinition.parse(req.body);
    const user = await userService.updateUser(params._id, data);
    return res.status(200).json(user);
}

export const userController = {
    getUsers,
    getUser,
    createUser,
    updateUser
} as const;






