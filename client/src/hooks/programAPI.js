import { $authHost } from "./index";

export const newProgram = async (program) => {
  const response = await $authHost.post("/suggest-new-program", program);
  return response;
};
