import { $host } from "./index";

export const registration = async (email, password) => {
  const response = await $host.post("api/user/registration", {
    email,
    password,
  });
  return response;
};

export const login = async (email, password) => {
  const response = await $host.post("api/user/login", { email, password });
  return response;
};

export const updateUser = async (user) => {
  const response = await $host.patch("api/user/profile", user);
  return response;
};
