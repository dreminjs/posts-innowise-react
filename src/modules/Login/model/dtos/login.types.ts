import z from "zod";
import { LoginDtoSchema } from "./login.schema";
import { IUser, Tokens } from "@shared/index";

export type TLoginFormDto = z.infer<typeof LoginDtoSchema>;

export type TLoginResponse = IUser & Tokens;
