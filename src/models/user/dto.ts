import z from 'zod'
import { baseModelDefinition,
    emailDefinition,
    genderDefinition,
    passwordDefinition,
    TGenderEnum } from '../definitions'

export const userDefinition = baseModelDefinition.extend({
    email: emailDefinition.optional(),
    username: z.string().min(4).max(20),
    password: passwordDefinition.optional(),
    googleID: z.string().optional(),
    name: z
    .string()
    .min(2, {message: "El nombre de usuario es requerido"})
    .max(50, {message: "El nombre de usuario no puede exceder los 50 caracteres"}),
    lastName: z
    .string()
    .min(1, { message: "El apellido es requerido" })
    .max(25, { message: "El apellido no puede tener más de 25 caracteres" }),
    gender: genderDefinition.optional(),
})

export type TUser = z.infer<typeof userDefinition>

export const getUsersQueryDefinition = userDefinition
  .omit({ password: true })
  .partial();
export type TGetUsersQueryDefinition = z.infer<typeof getUsersQueryDefinition>;

export const getUserParamsDefinition = userDefinition.pick({ _id: true });
export type TGetUserParamsDefinition = z.infer<typeof getUserParamsDefinition>;

export const createUserInputDefinition = userDefinition.omit({
  _id: true,
});
export type TCreateUserInputDefinition = z.infer<
  typeof createUserInputDefinition
>;

export const updateUserParamsDefinition = userDefinition.pick({ _id: true });
export type TUpdateUserParamsDefinition = z.infer<
  typeof getUserParamsDefinition
>;

export const updateUserInputDefinition = userDefinition
  .partial()
export type TUpdateUserInputDefinition = z.infer<
  typeof updateUserInputDefinition
>;