const { product } = require("../model/product.model");
const { Op } = require("sequelize");

const create = async (data) => {
  await product.create(data);
};

const getAll = async () => {
  return await product.findAll();
};

const remove = async (productId) => {
  return await product.destroy({
    where: {
      id: productId,
    },
  });
};

module.exports = {
  create,
  remove,
  getAll,
};
