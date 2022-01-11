// const baseUrl = "https://rickandmortyapi.com/api";
const baseUrl = `http://localhost:${process.env.PORT}`;

const apiClient = {
  baseUrl,
};

export default apiClient;
