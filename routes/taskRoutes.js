const express = require("express");
const router = express.Router();

const taskController = require("../controllers/taskController");

router.route("/createTask").post(taskController.createTask);
router.route("/readTask").get(taskController.readTask);
router.route("/deleteTask").delete(taskController.deleteTask);
router.route("/updateTask").patch(taskController.updateTask);

module.exports = router;
