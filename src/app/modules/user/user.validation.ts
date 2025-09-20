import { z } from "zod";

const userValidationSchema = z.object({
  password: z
    .string()
    .max(20, { error: "Password must be no longer then 20 characters" })
    .optional(),
});

export const userValidation = {
  userValidationSchema,
};
