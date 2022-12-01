const controller = require("../controller/customer.controller");

const router = require("express").Router();

router
  .get("/", controller.getAll)
  .post("/", controller.create)
  .delete("/:id", controller.remove);

module.exports = router;
