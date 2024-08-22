import { Schema } from "mongoose";
import { TUser } from "./dto";

export const userSchema = new Schema<TUser>({
    email: { type: String, required: false },
    username: { type: String, required: true },
    password: { type: String, required: false },
    googleID: { type: String, required: false },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
},{timestamps: true})

    