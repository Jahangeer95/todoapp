import { Router } from "express";
import {
  createTodos,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../controllers/todos.js";
import { getUser } from "../controllers/user.js";

const router = Router();

//Signin user
router.post("/", getUser);
// greet route
router.get("/", (req, res) => {
  res.send(`<b style= color:brown;>Welcome to to todo app<b/>`);
});
// Create todos , here user_id is uased as params
router.post("/todos/:id", createTodos);
// Get todos , here user_id is uased as params
router.get("/todos/:id", getAllTodos);

// Update todos, here todo_id is uased as params

router.patch("/todos/:id", updateTodo);

// Delete todos, here todo_id is uased as params

router.delete("/todos/:id", deleteTodo);

export default router;
