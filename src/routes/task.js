import express from "express";
import controller from "controllers/tasks";
const router = express.Router();

router.get("/", controller.getTasks);

router.post("/", controller.createTask);

router.get("/:id", controller.getTask);

router.put("/:id", controller.updateTask);

export default router;
