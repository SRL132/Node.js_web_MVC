import React from "react";
import { useAuth } from "../../context/auth/reducer";

export default function Home() {
  const { currentUser } = useAuth();

  console.log(currentUser);

  return <div>Hi, Hello from Home</div>;
}
