const express = require("express");
const router = express.Router();
const {taskFetch, taskCreate, taskUpdate, taskDelete} = require("./controllers");

router.get("/", taskFetch);

router.post("/", taskCreate)

router.put("/:taskId", taskUpdate)

router.delete("/:taskId", taskDelete)

module.exports = router;