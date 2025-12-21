import type { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.MYSQL_HOST!,          // mysql
      user: process.env.MYSQL_USER!,          // nextjs_user
      password: process.env.MYSQL_PASSWORD!,  // nextjs_password
      database: process.env.MYSQL_DATABASE_NAME!, // nextjs_db
      port: Number(process.env.MYSQL_PORT || 3306),
    },
    pool: { min: 0, max: 10 },
    migrations: {
      directory: "./database/migrations",
      extension: "ts",
    },
    seeds: {
      directory: "./database/seeds",
      extension: "ts",
    },
    acquireConnectionTimeout: 10000,
  },
};

export default config;
