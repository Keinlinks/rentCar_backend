const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "rentcar",
});

tableCars = sequelize.define(
  "cars",
  {
    description: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    model: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    year: {
      type: Sequelize.NUMBER,
      allowNull: false,
      unique: false,
    },
    price: {
      type: Sequelize.NUMBER,
      allowNull: false,
      unique: false,
    },
    km: {
      type: Sequelize.NUMBER,
      allowNull: false,
      unique: false,
    },
    color: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },

    currentClientId: {
      type: Sequelize.NUMBER,
      allowNull: true,
      unique: false,
    },
  },
  {
    tableName: "cars",
    timestamps: false,
  }
);

const add_car = (req, res) => {
  tableCars
    .create({
      description: req.body.description,
      model: req.body.model,
      year: req.body.year,
      price: req.body.price,
      km: req.body.km,
      color: req.body.color,
      currentClientId: null,
    })
    .then(() => {
      console.log("Added car");
      tableCars.findOne({ order: [["id", "DESC"]] }).then((car) => {});
      res.status(200).json({ message: "Added car" });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

const get_car = (req, res) => {
  tableCars
    .findAll()
    .then((allCar) => {
      if (!allCar) {
        res.status(200).json({ message: "No hay vehiculos" });
      }
      if (allCar) {
        res
          .status(200)
          .json({ message: "Peticion completada", allCar: allCar });
      }
    })
    .catch((err) => {
      console.log("error getCar");
      res.status(500).send({ message: err.message });
    });
};

const rentCar = (req, res) => {
  const { userId, carId } = req.body;

  tableCars.update({ currentClientId: userId }, { where: { id: carId } });
};

const updateCar = (req, res) => {
  const id = req.body.id;
  const updateCar = {
    description: req.body.description,
    model: req.body.model,
    year: req.body.year,
    price: req.body.price,
    km: req.body.km,
    color: req.body.color,
    currentClientId: 0,
  };

  tableCars
    .update(
      {
        description: updateCar.description,
        model: updateCar.model,
        year: updateCar.year,
        price: updateCar.price,
        km: updateCar.km,
        color: updateCar.color,
        currentClientId: 0,
      },
      { where: { id: id } }
    )
    .then(() => {
      res.status(200).json({ message: "Se edito correctamente!" });
    })
    .catch((err) => {
      console.log("Hubo un error: " + err.message);
      res.status(500).json({ message: err.message });
    });
};

const deleteCar = (req, res) => {
  const id = req.body.id;

  tableCars
    .destroy({ where: { id: id } })
    .then(() => {
      res.status(200).json({ message: "User deleted successfully" });
    })
    .catch((err) => {
      console.log("Error al eliminar: " + err.message);
      res.status(500).json({ message: err.message });
    });
};

module.exports = { add_car, get_car, rentCar, updateCar, deleteCar };
