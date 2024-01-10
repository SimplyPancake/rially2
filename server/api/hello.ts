import { PrismaClient } from "@prisma/client";

export default defineEventHandler((event) => {
  let prisma: PrismaClient = event.context.prisma;
  return {
    hello: "world",
  };
});
