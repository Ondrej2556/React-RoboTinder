export const getData = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const robots = await data.json();
  return robots;
};
