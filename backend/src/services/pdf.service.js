import pdf from "pdf-parse";

export const extractText =
async (buffer) => {

  const result =
    await pdf(buffer);

  return result.text;
};