var express = require('express');
var router = express.Router();
var TaskController = require('../controllers/task.controller');

router.post('/save-task', TaskController.verifyToken, TaskController.saveTask);
router.get('/tasks', TaskController.verifyToken , TaskController.getTasks);
router.get('/task/:id', TaskController.verifyToken, TaskController.getTask);
router.delete('/task/:id', TaskController.verifyToken ,TaskController.deleteTask);
router.put('/task/:id', TaskController.verifyToken ,TaskController.updateTask);
router.get('/task/:day/:month', TaskController.verifyToken ,TaskController.getByDayAndMonth);
router.get('/tasks/:month', TaskController.verifyToken, TaskController.getCategoriesByMonth);

module.exports = router;