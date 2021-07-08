const express = require("express");
const personController = require("../controller/PersonController");
const router = express.Router();

router.post("/create", personController.create);
router.get("/all", personController.getAll);
router.put("/update", personController.update);
router.get("/:id", personController.getById);
router.post("/insert-dummy", personController.insertDummy);
router.delete("/:id", personController.deleteById);
router.get("/", (req, res) => {
  console.log(req.url);
  res.send("<h1>index</h1>");
});

router.use((req, res) => {
  console.log("404 not found", req.url);
  res.send("<h1>404</h1>");
});

module.exports = router;
