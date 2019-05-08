const router = require("express").Router();
// const controller = require("../controllers/users");

router.get("/", (req, res) => {
  console.log("users get");
});

router.post("/", (req, res) => {
  console.log("users post");
});

router.put("/:id", (req, res) => {
  console.log("user put");
});

router.delete("/:id", (req, res) => {
  console.log("users delete");
});

module.exports = router;
