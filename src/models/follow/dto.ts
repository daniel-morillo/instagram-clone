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

export const getFollowsQueryDefinition = followDefinition
  .omit({ follower: true, followed: true })
  .partial();

export type TGetFollowsQueryDefinition = z.infer<typeof getFollowsQueryDefinition>;

export const getFollowParamsDefinition = followDefinition.pick({ _id: true });
export type TGetFollowParamsDefinition = z.infer<typeof getFollowParamsDefinition>;

export const createFollowInputDefinition = followDefinition.omit({
  _id: true,
});
export type TCreateFollowInputDefinition = z.infer<
  typeof createFollowInputDefinition>;

export const updateFollowParamsDefinition = followDefinition.pick({ _id: true });
export type TUpdateFollowParamsDefinition = z.infer<
  typeof getFollowParamsDefinition>;  

export const updateFollowInputDefinition = followDefinition.partial()
export type TUpdateFollowInputDefinition = z.infer<
  typeof updateFollowInputDefinition>;


