import express from "express";
import userRouter from "./user";
import sessionsController from "controllers/sessions";
const router = express.Router();

router.post("/login", sessionsController.login);

router.use("/users", userRouter);

export default router;
