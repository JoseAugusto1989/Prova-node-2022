const { ordered } = require("../model/ordered.model");
const { Op } = require("sequelize");

const create = async (data) => {
  await ordered.create(data);
};

const getAll = async () => {
  return await ordered.findAll();
};

const remove = async (orderedId) => {
  return await ordered.destroy({
    where: {
      id: orderedId,
    },
  });
};

module.exports = {
  create,
  remove,
  getAll,
};
