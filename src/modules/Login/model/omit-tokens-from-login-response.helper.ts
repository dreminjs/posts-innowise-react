import { TLoginResponse } from "./dtos/login.types";

export const omitTokensFromLoginResponse = (
  response: TLoginResponse,
): Omit<TLoginResponse, "accessToken" | "refreshToken"> => {
  const { accessToken, refreshToken, ...rest } = response;
  return rest;
};
