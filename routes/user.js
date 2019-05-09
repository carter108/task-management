const router = require("express").Router();
const controller = require("../controllers/users");

router.get("/", controller.getUsers);

router.post("/", controller.createUser);

router.get("/:id", controller.getUser);

module.exports = router;
