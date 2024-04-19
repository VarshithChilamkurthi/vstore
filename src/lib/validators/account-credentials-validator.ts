import { z } from "zod"

export const AuthCredentialsValidator = z.object({
    email: z.string().email(),
    password: z.string().min(8, {message: "password must be minimum of 8 characters"})
})

export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>