const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "rentcar",
});

const tableUser = sequelize.define(
  "users",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: Sequelize.NUMBER,
      allowNull: false,
      unique: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    rentID: {
      type: Sequelize.NUMBER,
      allowNull: false,
      unique: true,
    },
    rentDays: {
      type: Sequelize.NUMBER,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);

const deleteAcount = (req, res) => {
  const id = req.body.id;

  tableUser.destroy({ where: { id: id } }).then(() => {
    res.status(200).json({ message: "User deleted successfully" });
  });
};

module.exports = { deleteAcount };
