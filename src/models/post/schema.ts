import { Schema } from "mongoose";
import { TPost } from "./dto";

export const postSchema = new Schema<TPost>({
    title: { type: String, required: true },
    content: { type: String, required: false },
    image: { type: String, required: false },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true }
},{timestamps: true})

