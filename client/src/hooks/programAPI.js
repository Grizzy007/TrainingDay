import { $authHost } from "./index";

export const newProgram = async (program) => {
  const response = await $authHost.patch("/suggest-new-program", program);
  return response;
};
