import { z } from 'zod';

export const messageSchema = z.object({
    content: z
        .string()
        .min(4, {message: 'content should be of atleast 4 characters'})
        .max(300, {message: 'content should not exceed 300 characters'})
})