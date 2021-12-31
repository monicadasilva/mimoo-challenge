import { createContext, useContext, useState } from "react";
import {
  AuthProviderData,
  ContextProp,
  DataForm,
} from "../../types/AuthContext";

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: ContextProp) => {
  const [token, setToken] = useState<string>(
    localStorage.getItem("@mimoo/token") || ""
  );

  const reqLogin = async (data: DataForm) => {};

  return (
    <AuthContext.Provider value={{ setToken, reqLogin, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
