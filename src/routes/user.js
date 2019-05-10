import express from "express";
import controller from "controllers/users";
import { checkToken, taskRequestHandler } from "middleware";
import taskRouter from "routes/task";
const router = express.Router();

// router.use("*", checkToken);

router.get("/", controller.getUsers);

router.post("/", controller.createUser);

router.get("/:id", controller.getUser);

router.use("/:userId/tasks", taskRequestHandler, taskRouter);

export default router;
