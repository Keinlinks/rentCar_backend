const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
//middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use(require("./routes/routes"));

app.listen(3000, () => {
  console.log("listening on port 3000");
});
