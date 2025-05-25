import type { ReactNode } from "react";
import type { User } from "../types/userTypes";

export interface AuthContextType {
  currentUser: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}
