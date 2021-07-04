const express = require("express");
const cors = require("cors");
const bookRoutes = require("./API/tasks/routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/tasks", bookRoutes)

app.listen(8000);