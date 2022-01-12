import axios from "axios";
import { getCurrentUserToken } from "./firebase";

export async function syncUserData() {
  const userToken = await getCurrentUserToken();

  return axios({
    method: "POST",
    url: `http://localhost:8000/users/sync`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

  // return fetch(`http://localhost:${process.env.SERVER_PORT}/sign-up`, {
  //   method: "POST", // *GET, POST, PUT, DELETE, etc.
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
  //     Authorization: `Bearer ${userToken}`,
  //   },
  // });
}
