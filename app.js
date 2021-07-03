const express = require("express");
let data = require("./data");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/tasks", (req, res) => {
    res.json(data);
})

app.post("/tasks", (req, res) => {
    const task = {
        id: data.length + 1,
        ...req.body,
        done: false,
    }
    data.push(task);
    res.status(201).json({"message": `Data with ID ${task.id} has been successfully added.`});
})

app.put("/tasks/:taskId", (req, res) => {
    const {taskId} = req.params;
    const foundTask = data.find(task => task.id === +taskId)
    
    for(const key in req.body) foundTask[key] = req.body[key];
    
    res.json(data);

})

app.delete("/tasks/:taskId", (req, res) => {
    const {taskId} = req.params;
    data = data.filter(task => task.id !== +taskId);
    
    res.json(data);
})

app.listen(8000);