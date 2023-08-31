const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
app.use(cors());
//middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use(require("./routes/routes"));

app.use(require("./routes/imageRoutes"));

app.listen(3000, () => {
  console.log("listening on port 3000");
});
