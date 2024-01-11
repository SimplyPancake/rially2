import { authOptions } from "@/server/api/auth/[...]";
import { getServerSession, getServerToken } from "#auth";
import { User } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event, authOptions);
  event.context.session = session;
  event.context.isLoggedIn = false;
  if (session!.user) {
    event.context.isLoggedIn = true;
    const user = session!.user;
    event.context.isAdmin = user.isAdmin;
  }
});
