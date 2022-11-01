import postgres from "pg";
import config from "config";

const { Pool } = postgres;

const password = config.get("password");

const pool = new Pool({
  user: "postgres",
  password: password,
  host: "localhost",
  database: "todo_pern_app",
});

pool.connect(() => {
  console.log("connected")
})

export default pool;
