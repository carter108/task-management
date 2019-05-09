import express from "express";
import controller from "controllers/users";
import { checkToken } from "middleware";
const router = express.Router();

router.use("*", checkToken);

router.get("/", controller.getUsers);

router.post("/", controller.createUser);

router.get("/:id", controller.getUser);

export default router;
