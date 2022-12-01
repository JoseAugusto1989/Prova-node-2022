const controller = require("../controller/prova.controller");

const router = require("express").Router();

router
  .get("/", controller.getAll)
  .get("/:id", controller.getById)
  .post("/", controller.create)
  .put("/:id", controller.update)
  .delete("/:id", controller.remove);

module.exports = router;
