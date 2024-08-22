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

export const getPostsQueryDefinition = postDefinition
  .omit({ owner: true })
  .partial();

export type TGetPostsQueryDefinition = z.infer<typeof getPostsQueryDefinition>;

export const getPostParamsDefinition = postDefinition.pick({ _id: true });
export type TGetPostParamsDefinition = z.infer<typeof getPostParamsDefinition>;

export const createPostInputDefinition = postDefinition.omit({
  _id: true,
});
export type TCreatePostInputDefinition = z.infer<
  typeof createPostInputDefinition>;

export const updatePostParamsDefinition = postDefinition.pick({ _id: true });
export type TUpdatePostParamsDefinition = z.infer<
  typeof getPostParamsDefinition>;

export const updatePostInputDefinition = postDefinition.partial()
export type TUpdatePostInputDefinition = z.infer<
  typeof updatePostInputDefinition>;

