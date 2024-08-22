import { Types, isValidObjectId } from "mongoose";
import z from "zod";

export const ObjectIdDefinition = z.instanceof(Types.ObjectId ).or(z.string().refine(isValidObjectId));

export const baseModelDefinition = z.object({
    _id: ObjectIdDefinition,
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
})

export const genderDefinition = z.enum(["MALE", "FEMALE", "OTHER"], {
    message: "Debe seleccionar una opción",
  });

export type TGenderEnum = z.infer<typeof genderDefinition>;

export const passwordDefinition = z
  .string()
  .regex(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/, {
    message:
      "Debe incluir al menos una letra minúscula, una letra mayúscula y un número.",
  });

export const emailDefinition = z.string().email({
    message: "Debe ser un correo electrónico válido",
  });

export const usernameDefinition = z.string().min(4).max(20);