var express = require('express');
var router = express.Router();
var TaskController = require('../controllers/task.controller');

router.post('/save-task', TaskController.saveTask);
router.get('/tasks', TaskController.getTasks);
router.get('/task/:id', TaskController.getTask);
router.delete('/task/:id', TaskController.deleteTask);

module.exports = router;