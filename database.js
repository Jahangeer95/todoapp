import postgres from "pg";
import config from "config";

const { Pool } = postgres;

const pool = new Pool({
  user: "postgres",
  password: config.get("password"),
  host: "127.0.0.1",
  port: 5432,
  database: "todo_pern_app",
});

export default pool;
