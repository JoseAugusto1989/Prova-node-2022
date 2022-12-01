module.exports = (sequelize, DataTypes) => {
  const Prova = sequelize.define(
    "prova",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      numbers: DataTypes.INTEGER,
      email: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return Prova;
};
