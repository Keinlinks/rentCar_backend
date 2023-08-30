const Sequelize = require("sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "rentcar",
});
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

const loginUser = (req, res) => {
  const { email, password } = req.body;
  tableUser
    .findOne({ where: { email: email } })
    .then((user) => {
      if (!user) {
        throw new Error("Usuario no encontrado");
      } else {
        bcrypt.compare(password, user.password, (err, response) => {
          if (err) {
            console.error("Error al comparar contraseñas", err);
            res.status(500).json({ message: "Error interno del servidor" });
          } else {
            if (response) {
              const token = generateToken(user);
              const dataUser = {
                id: user.id,
                name: user.name,
                lastName: user.lastName,
                address: user.address,
                phone: user.phone,
                email: user.email,
                rentID: user.rentID,
                rentDays: user.rentDays,
              };
              res.status(200).json({
                message: "Inicio de sesión exitoso",
                dataUser: dataUser,
                token: token,
              });
            } else {
              res.status(401).json({ message: "Contraseña incorrecta" });
            }
          }
        });
      }
    })
    .catch((error) => {
      console.error("Error de servidor", error);
      res.status(500).json({ message: "Error interno del servidor" });
    });
};
const registerUser = (req, res) => {
  const { email, password } = req.body;
  tableUser.findOne({ where: { email: email } }).then((user) => {
    if (user) {
      res.status(400).json({ message: "Email exists" });
      return;
    } else {
      console.log("creando usuario...");
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          console.log("ERROR DE HASH");
          res.status(500).json({ message: "error al crear contrasenia" });
        } else {
          tableUser
            .create({
              name: req.body.name,
              lastName: req.body.lastName,
              address: req.body.address,
              phone: req.body.phone,
              email: req.body.email,
              rentID: 0,
              rentDays: 0,
              password: hash,
            })
            .then(() => {
              tableUser
                .findOne({
                  order: [["id", "DESC"]],
                  limit: 1,
                })
                .then((lastData) => {
                  if (lastData) {
                    tableRoles.create({
                      id_user: lastData.id,
                      id_role: 2,
                    });
                  } else {
                    console.log("No se encontraron registros.");
                  }
                })
                .catch((error) => {
                  console.error("Error:", error);
                });
              res.status(200).json({ message: "Usuario creado con exito" });
            })
            .catch((err) => {
              res
                .status(500)
                .json({ message: "Error al crear usuario", err: err });
            });
        }
      });
    }
  });
};

const changePassword = (req, res) => {
  const userId = req.body.id;
  const passwordOld = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  tableUser.findOne({ where: { id: userId } }).then((user) => {
    if (!user) {
      res.status(404).json({ message: "Usuario no encontrado" });
    } else {
      bcrypt.compare(passwordOld, user.password, (err, result) => {
        if (err) {
          res.status(500).json({ message: "error al hashear" });
        }
        if (result) {
          bcrypt.hash(newPassword, 10, (err, hash) => {
            if (err) {
              console.log("ERROR: hash, al cambiar de contrania" + err);
              res.status(500).json({ message: "error de hash" });
            } else {
              tableUser
                .update({ password: hash }, { where: { id: userId } })
                .then((result) => {
                  if (result[0] === 1) {
                    res
                      .status(200)
                      .json({ message: "Contraseña actualizada exitosamente" });
                  } else {
                    res.status(404).json({ message: "Usuario no encontrado" });
                  }
                })
                .catch((error) => {
                  res.status(500).json({
                    message: "Error al actualizar la contraseña",
                    error: error,
                  });
                });
            }
          });
        } else {
          res.status(401).json({ message: "contrasenia incorrecta" });
        }
      });
    }
  });
};
const generateToken = (user) => {
  const payload = {
    userId: user.id,
    userEmail: user.email,
  };
  const secretKey = "ClaveSecreta";
  const option = {
    expiresIn: "7d",
  };
  return jwt.sign(payload, secretKey, option);
};

module.exports = { loginUser, registerUser, changePassword };
