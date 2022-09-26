import fs from "fs/promises";
export const read = async (fileName: string) => {
  const json = await fs.readFile(fileName, "utf-8");

  return JSON.parse(json);
};

export const write = async <Data>(fileName: string, data: Data) => {
  await fs.writeFile(fileName, JSON.stringify(data));
};
