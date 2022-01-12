// const baseUrl = "https://rickandmortyapi.com/api";
const baseUrl = `http://localhost:${process.env.REACT_APP_SERVER_PORT}`;
console.log(baseUrl);
const apiClient = {
  baseUrl,
};

export default apiClient;
