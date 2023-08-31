const express = require("express");
const router = express.Router();
const { add_car } = require("../controllers/product_controller");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "rentcar",
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const store = multer.diskStorage({
  destination: "./",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.mimetype.split("/")[1]);
  },
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
router.post(
  "/upload",
  upload.fields([{ name: "image", maxCount: 1 }]),
  (req, res) => {
    const dataJson = JSON.parse(req.body.json);
    const imageFile = req.files.image[0];
    tableCars
      .create({
        description: dataJson.description,
        model: dataJson.model,
        year: dataJson.year,
        price: dataJson.price,
        km: dataJson.km,
        color: dataJson.color,
        currentClientId: null,
      })
      .then(() => {
        console.log("Added car");
        tableCars.findOne({ order: [["id", "DESC"]] }).then((car) => {
          const idCar = car.id;
          const extension = path.extname(imageFile.originalname);
          const imageFolderPath = "../rentcar/src/assets/imagenes";
          const imageName = `imagenId_${idCar}.png`;
          if (!fs.existsSync(imageFolderPath)) {
            fs.mkdirSync(imageFolderPath, { recursive: true });
          }

          const imagePath = `${imageFolderPath}/${imageName}`;
          fs.writeFileSync(imagePath, imageFile.buffer);
        });
        res.status(200).json({ message: "Added car" });
      })
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
  }
);

module.exports = router;
