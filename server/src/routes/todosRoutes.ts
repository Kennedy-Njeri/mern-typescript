import { Router } from "express"
import { getTodos, addTodo, updateTodo, deleteTodo, detailTodo } from "../controllers/todoControllers"

const router: Router = Router()

router.get("/todos", getTodos)

router.post("/add-todo", addTodo)

router.put("/edit-todo/:id", updateTodo)

router.delete("/delete-todo/:id", deleteTodo)

router.get("/todo/:id", detailTodo)

export default router