import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import ws from "ws";

export let prisma: PrismaClient;

dotenv.config();

switch (process.env.EXEC_ENV) {
  case "development": {
    prisma = new PrismaClient({
      log: ["info", "warn", "error"],
    });
    break;
  }
  case "production":
  case "develop": // develop branch's environment. Different from "development" which corresponds to the local development env.
  case "preview": {
    neonConfig.webSocketConstructor = ws;

    const connectionString = `${process.env.DATABASE_URL}`;
    const pool = new Pool({ connectionString });
    const adapter = new PrismaNeon(pool);

    prisma = new PrismaClient({
      adapter,
      log: ["info", "warn", "error"],
    });
    break;
  }
  default: {
    throw new Error(`Unknown EXEC_ENV=${process.env.EXEC_ENV}`);
  }
}
