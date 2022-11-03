const baseUrl = process.env.BASE_URL;

export const getDependencias = async () => {
  const res = await fetch(`${baseUrl}/api/dependencias`);
  const data = await res.json();
  return data;
};
