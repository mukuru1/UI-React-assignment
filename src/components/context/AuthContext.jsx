import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser")) || null
  );

  useEffect(() => {
    localStorage.setItem("authUser", JSON.stringify(user));
  }, [user]);

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const found = users.find(
      u => u.email === email && u.password === password
    );
    if (found) setUser(found);
    return found;
  };

  const register = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = { ...data, id: Date.now(), role: "owner" };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
