import { z } from 'zod';

export const acceptMessageSchema = z.object({
    acceptMesssage: z.boolean(),
})