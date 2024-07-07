import { z } from 'zod';

export const usernameValidation = z
    .string()
    .min(2, "username should be atleast of 2 characters")
    .max(12, "username should be no more than 12 characters")
    .regex(/^[a-zA-Z0-9_]+$/ , "username must not contain special characters")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "invalid email address"}),
    password: z.string().min(6, {message: "password must be atleast of 6 characters"}),
})