const Sequelize = require("sequelize");
const jwt = require("jsonwebtoken");
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
const tableRoles = sequelize.define(
  "roles",
  {
    id_user: {
      type: Sequelize.NUMBER,
      allowNull: true,
      unique: false,
    },
    id_role: {
      type: Sequelize.NUMBER,
      allowNull: false,
      unique: false,
    },
  },
  {
    tableName: "assignedrole",
    timestamps: false,
    underscored: true,
  }
);

const roleState = (req, res) => {
  tokenAuth = req.headers.authorization;
  var USERDATA = {
    address: "",
    email: "",
    id: 0,
    lastName: "",
    name: "",
    phone: 0,
    rentDays: 0,
    rentID: 0,
  };
  jwt.verify(tokenAuth.split(" ")[1], "ClaveSecreta", (err, token) => {
    if (err) {
      console.log("token invalido: " + err.message);
      res.status(500).json({ message: "Token invalid", role: "visit" });
    } else {
      const userId = token.userId;
      tableRoles.findOne({ where: { id_user: userId } }).then((role) => {
        tableUser.findOne({ where: { id: userId } }).then((user) => {
          USERDATA = {
            address: user.address,
            email: user.email,
            id: user.id,
            lastName: user.lastName,
            name: user.name,
            phone: user.phone,
            rentDays: user.rentDays,
            rentID: user.rentID,
          };
          if (role.id_role === 1) {
            res.status(200).json({
              message: "Admin confirm",
              role: "admin",
              userData: USERDATA,
            });
          }
          if (role.id_role === 2) {
            res.status(200).json({
              message: "User confirm",
              role: "user",
              userData: USERDATA,
            });
          }
        });
      });
    }
  });
};

const getAllUsers = (req, res) => {
  tokenAuth = req.headers.authorization;
  jwt.verify(tokenAuth.split(" ")[1], "ClaveSecreta", (err, token) => {
    if (err) {
      res.status(400).json({ message: "error" });
    } else {
      tableRoles.findOne({ where: { id_user: token.userId } }).then((role) => {
        if (+role.id_role === 1) {
          tableUser.findAll().then((users) => {
            if (!users) {
              res.status(404).send("Error, no hay usuarios");
            }
            res.status(200).json({ message: "success", users: users });
          });
        } else {
          res.status(403).json({ message: "Acceso restringido" });
        }
      });
    }
  });
};

module.exports = { roleState, getAllUsers };
