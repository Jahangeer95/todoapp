import { asyncMiddleware } from "../middlewares/async.js";
import pool from "../database.js";

export const getUser = asyncMiddleware(async (req, res) => {
  const { email } = req.body;
  let userdata;
  userdata = await pool.query("SELECT * FROM  person WHERE email = $1", [
    email,
  ]);
  if (!userdata.rows.length) {
    userdata = await pool.query(
      "INSERT INTO person (email) VALUES($1) RETURNING *",
      [email]
    );
  }

  res.send(userdata.rows[0]);
});

// email already exists or unique authentication........
