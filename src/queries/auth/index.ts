import { baseUrl } from "@/utils";

export const register = () => {
  const url = `${baseUrl}/api/auth/register`;
};

export const login = () => {
  const url = `${baseUrl}/api/auth/login`;
};
