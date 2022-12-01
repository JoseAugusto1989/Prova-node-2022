const service = require("../service/ordered.service");

const create = async (req, res) => {
  await service.create(req.body);
  try {
    res.status(201).send("Ordered created successfully");
    
  } catch (error) {
    res.status(400).send("Something is wrong in Ordered")
  }
  
};

const getAll = async (req, res) => {
  const response = await service.getAll();
  res.send(response);
};

const remove = async (req, res) => {
  const provaId = req.params.id;
  await service.remove(provaId);
  try {
    res.status(204).send("Ordered removed successfully");

  } catch (error) {
    res.status(404).send("Something is wrong in Ordered")
  }
};

module.exports = {
  create,
  getAll,
  remove,
};
