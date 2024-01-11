import { User as pUser } from "@prisma/client";

declare module "@auth/core/types" {
  interface Session {
    user?: User;
  }
  interface User extends pUser {}
}

export {};
