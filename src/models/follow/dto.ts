import z from 'zod';
import { Types, isValidObjectId } from "mongoose";
import { baseModelDefinition } from '../definitions';

export const followDefinition = baseModelDefinition.extend({
  follower: z.instanceof(Types.ObjectId)
  .or(z.string().refine(isValidObjectId)),
  followed: z.instanceof(Types.ObjectId)
  .or(z.string().refine(isValidObjectId)),
})

export type TFollow = z.infer<typeof followDefinition>