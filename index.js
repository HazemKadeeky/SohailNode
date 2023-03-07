const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("./config/dbConnect");

const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(bodyParser.json());

app.use("/task", taskRoutes);

app.listen(3000, () => {
  console.log("Server is up and running on port 3000");
});
