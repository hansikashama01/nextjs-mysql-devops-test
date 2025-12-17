import type { Knex } from "knex";
import dotenv from "dotenv";

// Load environment variables from .env if available
dotenv.config();

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.MYSQL_HOST || "localhost",       
      user: process.env.MYSQL_USER || "root",          
      password: process.env.MYSQL_PASSWORD || "",      
      database: process.env.MYSQL_DATABASE_NAME || "devops_test", 
      port: Number(process.env.MYSQL_PORT) || 3306,     // MySQL port
    },
    pool: { min: 0, max: 10 },
    migrations: {
      directory: "./migrations",   // Migration folder
      extension: "ts",
    },
    seeds: {
      directory: "./seeds",        // Seed folder (optional)
      extension: "ts",
    },
    acquireConnectionTimeout: 10000, // Wait up to 10s for DB connection
  },
};

export default config;
