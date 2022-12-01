const { prova } = require("../model/prova.model");
const { Op } = require("sequelize");

const create = async (data) => {
  await prova.create(data);
};

const getAll = async () => {
  return await prova.findAll();
};

const getById = async (provaId) => {
  return await prova.findAll({
    where: {
      id: provaId,
    },
  });
};

const update = async (provaId, data) => {
  return await prova.update(data, {
    where: {
      id: provaId,
    },
  });
};

const remove = async (provaId) => {
  return await prova.destroy({
    where: {
      id: provaId,
    },
  });
};

module.exports = {
  create,
  update,
  remove,
  getAll,
  getById,
};
