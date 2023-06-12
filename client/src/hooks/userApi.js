import { $host, $authHost } from "./index";

export const registration = async (data) => {
  const response = await $host.post("/auth/registration", data);
  console.log(response);
  return response.data;
};

export const login = async (data) => {
  const response = await $host.post("/auth/login", data);
  localStorage.setItem("token", response.data.token);
  return response;
};

export const check = async () => {
  const response = await $authHost.get("/check");
  localStorage.setItem('token', response.data.token)
  return response;
};

export const updateUser = async (user) => {
  const response = await $host.patch("api/user/profile", user);
  return response;
};
