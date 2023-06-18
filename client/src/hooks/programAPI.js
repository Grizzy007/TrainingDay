import { $authHost, $host } from "./index";

export const newProgram = async (program) => {
  const response = await $authHost.post("/suggest-new-program", program);
  return response;
};

export const catalog = async () => {
  const response = await $host.get("/catalog");
  return response;
};

export const cardById = async (id) => {
  const response = await $authHost.get(`/catalog/${id}`);
  return response;
};
