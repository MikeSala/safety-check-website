export const preventEnterSubmit = (e: React.KeyboardEvent<HTMLFormElement>) => {
  if (e.code === "Enter") e.preventDefault();
};

export const reqMessage = (val: string) => {
  return `Please enter your ${val}`;
};
