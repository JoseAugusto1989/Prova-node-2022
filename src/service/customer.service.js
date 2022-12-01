const { customer } = require("../model/customer.model");
const { Op } = require("sequelize");

const create = async (data) => {
  await customer.create(data);
};

const getAll = async () => {
  return await customer.findAll();
};

const remove = async (customerId) => {
  return await customer.destroy({
    where: {
      id: customerId,
    },
  });
};

module.exports = {
  create,
  remove,
  getAll,
};
