import { useState } from "react";
import User from "./user";
import Guest from "./guest";

export default function Profile() {
  const [isLogged, setIsLogged] = useState(false);

  return <>{isLogged ? <User /> : <Guest />}</>;
}
