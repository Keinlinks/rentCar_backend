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

const changeName = (req, res) => {
  const id = req.body.id;
  const newName = req.body.newData;
  console.log("SI ENTRA");
  tableUser.findOne({ where: { id: id } }).then((user) => {
    if (!user) {
      res.status(401).json({ message: "usuario no encontrado" });
    }
    if (user) {
      tableUser
        .update({ name: newName }, { where: { id: id } })
        .then((result) => {
          if (result[0] === 1) {
            res
              .status(200)
              .json({ message: "El nombre se actualizo exitosamente" });
          } else {
            res.status(404).json({ message: "Usuario no encontrado" });
          }
        })
        .catch((error) => {
          res.status(500).json({
            message: "Error al actualizar nombre",
            error: error,
          });
        });
    }
  });
};

const changeLastname = (req, res) => {
  const id = req.body.id;
  const newLastname = req.body.newData;
  tableUser.findOne({ where: { id: id } }).then((user) => {
    if (!user) {
      res.status(401).json({ message: "usuario no encontrado" });
    }
    if (user) {
      tableUser
        .update({ lastName: newLastname }, { where: { id: id } })
        .then((result) => {
          if (result[0] === 1) {
            res
              .status(200)
              .json({ message: "El apellido se actualizo exitosamente" });
          } else {
            res.status(404).json({ message: "Usuario no encontrado" });
          }
        })
        .catch((error) => {
          res.status(500).json({
            message: "Error al actualizar apellido",
            error: error,
          });
        });
    }
  });
};
const changePhone = (req, res) => {
  const id = req.body.id;
  const newPhone = req.body.newData;
  tableUser.findOne({ where: { id: id } }).then((user) => {
    if (!user) {
      res.status(401).json({ message: "usuario no encontrado" });
    }
    if (user) {
      tableUser
        .update({ phone: newPhone }, { where: { id: id } })
        .then((result) => {
          if (result[0] === 1) {
            res
              .status(200)
              .json({ message: "El numero se actualizo exitosamente" });
          } else {
            res.status(404).json({ message: "Usuario no encontrado" });
          }
        })
        .catch((error) => {
          res.status(500).json({
            message: "Error al actualizar numero",
            error: error,
          });
        });
    }
  });
};

const changeAddress = (req, res) => {
  const id = req.body.id;
  const newAddress = req.body.newData;
  tableUser.findOne({ where: { id: id } }).then((user) => {
    if (!user) {
      res.status(401).json({ message: "usuario no encontrado" });
    }
    if (user) {
      tableUser
        .update({ address: newAddress }, { where: { id: id } })
        .then((result) => {
          if (result[0] === 1) {
            res
              .status(200)
              .json({ message: "La direccion se actualizo exitosamente" });
          } else {
            res.status(404).json({ message: "Usuario no encontrado" });
          }
        })
        .catch((error) => {
          res.status(500).json({
            message: "Error al actualizar direccion",
            error: error,
          });
        });
    }
  });
};

const changeEmail = (req, res) => {
  const id = req.body.id;
  const newEmail = req.body.newData;
  tableUser.findOne({ where: { id: id } }).then((user) => {
    if (!user) {
      res.status(401).json({ message: "usuario no encontrado" });
    }
    if (user) {
      tableUser
        .update({ email: newEmail }, { where: { id: id } })
        .then((result) => {
          if (result[0] === 1) {
            res
              .status(200)
              .json({ message: "El correo se actualizo exitosamente" });
          } else {
            res.status(404).json({ message: "Usuario no encontrado" });
          }
        })
        .catch((error) => {
          res.status(500).json({
            message: "Error al actualizar correo",
            error: error,
          });
        });
    }
  });
};

module.exports = {
  changeEmail,
  changeAddress,
  changeName,
  changePhone,
  changeLastname,
};
