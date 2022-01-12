const baseUrl = `http://localhost:${process.env.REACT_APP_SERVER_PORT}`;

const apiClient = {
  baseUrl,
};

console.log(baseUrl);

export default apiClient;
