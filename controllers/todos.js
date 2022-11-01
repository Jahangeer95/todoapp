import { asyncMiddleware } from "../middlewares/async.js";
import pool from "../database.js";

export const createTodos = asyncMiddleware(async (req, res) => {
  const { description } = req.body;
  const newTodo = await pool.query(
    "INSERT INTO todos (user_id , description) VALUES($1,$2) RETURNING *",
    [req.params.id, description]
  );

  res.send(newTodo.rows[0]);
});

export const getAllTodos = asyncMiddleware(async (req, res) => {
  const allTodos = await pool.query(
    "SELECT * FROM todos WHERE user_id = $1 ORDER BY todo_id",
    [req.params.id]
  );
  res.send(allTodos.rows);
});

export const updateTodo = asyncMiddleware(async (req, res) => {
  const { id } = req.params;
  let updateTodo;
  if (req.body.description) {
    const { description } = req.body;
    updateTodo = await pool.query(
      "UPDATE todos SET description = $1 WHERE todo_id = $2 Returning *",
      [description, id]
    );
  } else {
    const { todostatus } = req.body;
    updateTodo = await pool.query(
      "UPDATE todos SET todostatus = $1 WHERE todo_id = $2 Returning *",
      [todostatus, id]
    );
  }
  res.send([updateTodo.rows[0], { message: "todo is updated successfully" }]);
});

export const deleteTodo = asyncMiddleware(async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM todos WHERE todo_id = $1", [id]);
  res.send({ message: "Todo is deleted successfully..." });
});
