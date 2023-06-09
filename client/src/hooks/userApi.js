import { $host, $authHost } from "./index";

export const registration = async (data) => {
  const response = await $host.post("/auth/registration", data);
  return response;
};

export const login = async (formData) => {
  const { data } = await $host.post("/auth/login", formData);
  console.log(data.token);
  console.log(localStorage);
  localStorage.setItem("token", data.token);
  return data;
};

export const check = async () => {
  const response = await $authHost.get("/check");
  localStorage.setItem('token', response.data.token)
  return response;
};

export const updateUser = async (user) => {
  const response = await $authHost.patch("/profile", user);
  return response;
};
