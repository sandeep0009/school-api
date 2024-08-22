import { z } from 'zod';
export const zodVerification=z.object({

    name:z.string(),
    address:z.string(),
    longitude:z.number(),
    latitude:z.number()


})
