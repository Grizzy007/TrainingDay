import { $host } from "./index";

export const registration = async (data) => {
  const response = await $host.post("api/auth/registration", data);
  return response;
};

export const login = async (data) => {
  const response = await $host.post("api/auth/login", data);
  return response;
};

export const updateUser = async (user) => {
  const response = await $host.patch("api/user/profile", user);
  return response;
};
