let data = require("../../data");

exports.taskFetch = (req, res) => {
    res.json(data);
}

exports.taskCreate = (req, res) => {
    const task = {
        id: data.length + 1,
        ...req.body,
        done: false,
    }
    data.push(task);
    res.status(201).json(task);
}

exports.taskUpdate = (req, res) => {
    const { taskId } = req.params;
    const foundTask = data.find(task => task.id === +taskId)

    for (const key in req.body) foundTask[key] = req.body[key];
    res.json(data);

}

exports.taskDelete = (req, res) => {
    const { taskId } = req.params;
    data = data.filter(task => task.id !== +taskId);
    res.json(data);
}