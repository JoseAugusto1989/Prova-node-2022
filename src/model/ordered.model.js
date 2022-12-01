module.exports = (sequelize, DataTypes) => {
    const Ordered = sequelize.define(
      "ordered",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        customer_id: DataTypes.INTEGER,
        product_id: DataTypes.INTEGER,
        order_date: DataTypes.STRING, 

        references: { model: "customer", key: "customer_id" }
        onDelete: "CASCADE",
        onCreate: "CASCADE",

        references: { model: "product", key: "product_id" }
        onDelete: "CASCADE",
        onCreate: "CASCADE",

      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
  
    return Ordered;
  };
  