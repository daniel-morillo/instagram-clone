import z from 'zod';
import { Types, isValidObjectId } from "mongoose";
import { baseModelDefinition } from '../definitions';

export const postDefinition = baseModelDefinition.extend({
  title: z.string().min(4).max(50),
  content: z.string().min(4).max(500),
  image: z.string().optional(),
  owner: z.instanceof(Types.ObjectId)
  .or(z.string().refine(isValidObjectId)),
  date: z.date()
})

export type TPost = z.infer<typeof postDefinition>