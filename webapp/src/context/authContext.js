import axios from "axios";
import { createContext, useEffect, useState } from "react"; // https://www.freecodecamp.org/news/react-context-for-beginners/

// store the user info in  AuthContext
export const AuthContext = createContext();

// childern app component
export const AuthContextProvider = ({ children }) => {
  // if there is a user in local storage use it & no user it means not loged in then its null
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  // cal the api here instead of login page
  const login = async (inputs) => {
    const res = await axios.post("http://localhost:3001/auth/login", inputs);
    setCurrentUser(res.data);
  };

  const logout = async (inputs) => {
    await axios.post("http://localhost:3001/auth/logout");
    setCurrentUser(null);
  };

  // update local storage every time user change
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  // return provider and pass states
  return <AuthContext.Provider value={{ currentUser, login, logout }}>{children}</AuthContext.Provider>;
};
