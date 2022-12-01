const service = require("../service/product.service");

const create = async (req, res) => {
  await service.create(req.body);
  if (res) {
    res.status(201).send("Product created successfully");

  } else {
    res.status(400).send("Something is wrong in Product")
  }
 
};

const getAll = async (req, res) => {
  const response = await service.getAll();
  res.send(response);
};

const remove = async (req, res) => {
  const provaId = req.params.id;
  await service.remove(provaId);
  if (res) {
    res.status(204).send("Product removed successfully");

  } else {
    res.status(404).send("Something is wrong in Product")
  }
  
};

module.exports = {
  create,
  getAll,
  remove,
};
