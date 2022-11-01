import postgres from "pg";
import config from "config";

const { Pool } = postgres;

const pool = new Pool({
  user: "postgres",
  password: config.get("password"),
  host: "localhost",
  database: "todo_pern_app",
});

export default pool;
