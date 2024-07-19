import { useState } from "react";
import User from "./user";
import Guest from "./guest";

export default function Profile() {
  const [isLogged, setIsLogged] = useState(true);

  return <>{isLogged ? <User /> : <Guest />}</>;
}
