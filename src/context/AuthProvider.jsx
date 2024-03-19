import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const [op,setOp] = useState(null);

  return (
    <AuthContext.Provider value={{ auth, setAuth,op, setOp }}>
      {children}
    </AuthContext.Provider>
  );
}