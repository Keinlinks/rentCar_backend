const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  changePassword,
} = require("../controllers/auth_controllers");

const {
  add_car,
  get_car,
  rentCar,
  updateCar,
  deleteCar,
} = require("../controllers/product_controller.js");

const {
  changeEmail,
  changeAddress,
  changeName,
  changePhone,
  changeLastname,
} = require("../controllers/updateData");

const {
  roleState,
  getAllUsers,
} = require("../controllers/roleAuth_controller");

const { deleteAcount } = require("../controllers/deleteAcount");

router.post("/login", loginUser);

router.post("/register", registerUser);

router.post("/add_car", add_car);

router.post("/changePassword", changePassword);

router.post("/nameChange", changeName);

router.post("/lastNameChange", changeLastname);

router.post("/phoneChange", changePhone);

router.post("/emailChange", changeEmail);

router.post("/addressChange", changeAddress);

router.post("/deleteAcount", deleteAcount);

router.get("/roles", roleState);

router.get("/getCar", get_car);

router.post("rentCar", rentCar);

router.post("/updateCar", updateCar);

router.post("/deleteCar", deleteCar);

router.get("/getAllUsers", getAllUsers);

module.exports = router;
