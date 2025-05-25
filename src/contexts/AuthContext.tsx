import React, { createContext, useContext, useState, useEffect } from "react";
import type { User } from "../types/userTypes";
import { users as mockUsers } from "../mocks/users";
import type { AuthContextType, AuthProviderProps } from "../mocks/authTypes";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Recupera usuário do localStorage ao iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      try {
        const parsedUser: User = JSON.parse(storedUser);
        setCurrentUser(parsedUser);
      } catch (e) {
        console.error("Erro ao analisar usuário do localStorage:", e);
        localStorage.removeItem("currentUser");
      }
    }
  }, []);

  // Atualiza localStorage sempre que o currentUser mudar
  useEffect(() => {
    if (currentUser) {
      const userToStore = { ...currentUser };
      delete userToStore.password;
      localStorage.setItem("currentUser", JSON.stringify(userToStore));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);

  const login = (usernameInput: string, passwordInput: string): boolean => {
    const foundUser = mockUsers.find(
      (u) => u.username === usernameInput && u.password === passwordInput
    );

    if (foundUser) {
      const userWithoutPassword = { ...foundUser };
      delete userWithoutPassword.password;

      setCurrentUser(userWithoutPassword);
      return true;
    }

    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
