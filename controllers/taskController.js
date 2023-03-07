const { Task } = require("../models/taskModel");
const _ = require("lodash");

module.exports.createTask = (req, res) => {
  const task = new Task(req.body);

  task
    .save()
    .then((task) => {
      res.status(200).send({
        message: "Saved Successfully",
        data: task,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Failed To Save User",
      });
    });
};

module.exports.readTask = (req, res) => {
  Task.findOne(req.body)
    .then((task) => {
      res.status(200).send({
        message: "Task Fetched",
        data: task,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Failed to read task",
      });
    });
};

module.exports.deleteTask = (req, res) => {
  Task.findOneAndDelete(req.body)
    .then((task) => {
      res.status(200).send({
        message: "Deleted Successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Failed to Delete message",
      });
    });
};

module.exports.updateTask = (req, res) => {
  let body = {
    name: req.body.name,
    username: req.body.username,
    description: req.body.description,
  };

  let newBody = _.pick(req.body, ["name", "username", "description"]);

  console.log(newBody);

  Task.findOneAndUpdate(newBody, { description: req.body.newDescription })
    .then((task) => {
      console.log(task);
      res.status(200).send({
        message: "Task updated Successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: " Task Failed to update",
      });
    });
};
