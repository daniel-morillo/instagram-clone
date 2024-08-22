import { Schema } from "mongoose";
import { TFollow } from "./dto";

export const followSchema = new Schema<TFollow>({
    follower: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    followed: { type: Schema.Types.ObjectId, ref: 'User', required: true },
},{timestamps: true})

