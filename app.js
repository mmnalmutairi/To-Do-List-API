const express = require("express");
const data = require("./data");


const app = express();


app.get("/", (req, res) => {
    res.json(data);
});


app.listen(8000);