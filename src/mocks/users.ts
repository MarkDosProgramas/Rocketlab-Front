// src/mocks/users.ts
import type { User } from "../types/userTypes";

export const users: User[] = [
  {
    id: "user1",
    username: "marcus.vini",
    password: "123",
    email: "marcus@example.com",
    photoUrl: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    // Removidas as propriedades:
    // cart: [],
    // orders: [],
  },
  {
    id: "user2",
    username: "maria.silva",
    password: "abc",
    email: "maria@example.com",
    photoUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    // Removidas as propriedades:
    // cart: [],
    // orders: [],
  },
];
