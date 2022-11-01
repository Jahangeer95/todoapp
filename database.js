import postgres from "pg";
import config from "config";

const { Pool } = postgres;

const pool = new Pool({
  user: "postgres",
  password: "Pak14aug1947",
  host: "localhost",
  database: "todo_pern_app",
});

export default pool;
