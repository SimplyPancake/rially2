import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

export default defineEventHandler((event) => {
  if (!prisma) {
    console.log("Creating new PrismaClient");
    prisma = new PrismaClient();
  }
  event.context.prisma = prisma;
});
