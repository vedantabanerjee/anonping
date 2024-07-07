//this schema is to verify the 6 digit verification code sent to the user

import { z } from 'zod';

export const verifySchema = z.object({
    code: z.string().length(6, 'verification code must be of 6 digits')
})