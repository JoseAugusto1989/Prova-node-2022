const service = require("../service/customer.service");

const create = async (req, res) => {
  await service.create(req.body);
  try {
    res.status(201).send("Customer created successfully");
    
  } catch (error) {
    res.status(400).send("Something is wrong in Customer")
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
    res.status(204).send("Customer removed successfully");

  } catch (error) {
    res.status(404).send("Something is wrong in Customer")
  }
  
};

module.exports = {
  create,
  getAll,
  remove,
};
