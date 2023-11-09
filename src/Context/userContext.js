import { useEffect, useState } from "react";
import axios from "axios";
import { createContext } from "react";
import { toast } from "react-hot-toast";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const getUser = () => {
    axios
      .get("/profile")
      .then(({ data }) => {
        setUser(data);
      })
      .catch(({ data }) => {
        toast.error(data.error);
      });
  };

  useEffect(() => {
    !user && getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, getUser }}>
      {children}
    </UserContext.Provider>
  );
}
