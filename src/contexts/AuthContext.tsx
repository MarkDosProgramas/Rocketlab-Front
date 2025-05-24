// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { User } from "../types/userTypes";
import { users as mockUsers } from "../mocks/users";

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      try {
        const parsedUser: User = JSON.parse(storedUser);

        const userWithoutPassword = { ...parsedUser };
        delete userWithoutPassword.password;
        setUser(userWithoutPassword);
      } catch (e) {
        console.error("Erro ao analisar usuário do localStorage:", e);
        localStorage.removeItem("currentUser");
      }
    }
  }, []);

  useEffect(() => {
    if (user) {
      const userToStore = { ...user };
      delete userToStore.password;
      localStorage.setItem("currentUser", JSON.stringify(userToStore));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [user]);

  const login = (usernameInput: string, passwordInput: string): boolean => {
    const foundUser = mockUsers.find(
      (u) => u.username === usernameInput && u.password === passwordInput
    );

    if (foundUser) {
      const userWithoutPassword = { ...foundUser };
      delete userWithoutPassword.password;

      setUser(userWithoutPassword);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
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
