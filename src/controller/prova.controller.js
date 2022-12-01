const service = require("../service/prova.service");

const create = async (req, res) => {
  await service.create(req.body);
  res.status(201).send("Created successfully");
};

const getAll = async (req, res) => {
  const response = await service.getAll();
  res.send(response);
};

const getById = async (req, res) => {

}

const update = async (req, res) => {
  const provaId = parseInt(req.parqms.id, 10);
  await service.update(provaId, req.body);
  res.status(200).send("Updated successfully");
};

const remove = async (req, res) => {
  const provaId = req.params.id;
  await service.remove(provaId);
  res.status(204).send("Removed successfully");
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
