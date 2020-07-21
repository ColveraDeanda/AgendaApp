var Task = require('../models/task.model');
var ObjectId = require('mongodb').ObjectID;
var jwt = require('jsonwebtoken');

var TaskController = {

    /**
     * @param {object} req getting request data from user.
     * @param {object} res sending object as response.
     * @returns Task Object saved or it's respective error.
     */
    saveTask: function (req, res) {
        let error = false;
        let valid = [];
        let task = new Task();
        task.title = req.body.title;
        task.description = req.body.description;
        task.category = req.body.category;
        task.day = req.body.day;
        task.month = req.body.month;

        if (task.title == null || !isNaN(task.title)) {
            valid.push(' el título es incorrecto');
        }
        if (task.description == null || !isNaN(task.description)) {
            valid.push(' la descripción es incorrecta');
        }
        if (task.category == null || !isNaN(task.category)) {
            valid.push(' la categoría es incorrecta');
        }
        if (task.day == null || isNaN(task.day)) {
            valid.push(' el día es incorrecto');
        }
        if (task.month == null || !isNaN(task.month)) {
            valid.push(' el mes es incorrecto');
        }

        // Setting Data
        task.title = task.title.toLowerCase();
        task.description = task.description.toLowerCase();
        task.category = task.category.toLowerCase();
        task.month = task.month.toLowerCase();

        task.title = task.title.slice(0, 1).toUpperCase() + task.title.slice(1);
        task.description = task.description.slice(0, 1).toUpperCase() + task.description.slice(1);
        task.category = task.category.slice(0, 1).toUpperCase() + task.category.slice(1);
        task.month = task.month.slice(0, 1).toUpperCase() + task.month.slice(1);

        if (valid.length == 0) {
            Task.find({ day: task.day, month: task.month }).exec((err, data) => {
                data.map((x) => {
                    if (x.title === task.title) return error = true;
                });
                if (error === false) {
                    task.save((err, data) => {
                        if (err) return res.status(500).send({ message: 'Error al guardar' });
                        if (!data) return res.status(404).send({ message: 'Error al guardar' });
                        return res.status(200).send({
                            task: data
                        });
                    });
                } else {
                    return res.status(500).send({
                        repeated: 'La tarea ya existe'
                    });
                }
            });
        } else {
            return res.status(500).send({
                errors: valid
            });
        }
    },

    /**
     * @param {object} res sending object as response.
     * @returns Task Objects in array or it's respective error.
     */
    getTasks: function (err, res) {
        Task.find((err, data) => {
            if (err) return res.status(500).send({ message: 'A ocurrido un error.' });
            if (!data) return res.status(404).send({ message: 'No hay registros a mostrar' });
            if (data.length == 0) {
                return res.status(200).send({
                    message: 'No se han registrado tareas'
                });
            }
            return res.status(200).send({
                task: data
            });
        });
    },

    /**
     * @param {Object} req request id by user.
     * @param {Object} res sending object as response.
     * @returns Task Object or it's respective error.
     */
    getTask: function (req, res) {
        let id = req.params.id;
        Task.findById(id, (err, data) => {
            if (err) return res.status(500).send({ message: 'Error al devolver el registro' });
            if (!data) return res.status(404).send({ message: 'El registro no existe' });
            return res.status(200).send({
                task: data
            });
        });
    },

    /**
     * @param {Object} req request id by user.
     * @param {Object} res sending object as response.
     * @returns Message succesful or it's respetive error.
     */
    deleteTask: function (req, res) {
        let id = req.params.id;
        Task.findByIdAndDelete(id, (err, data) => {
            if (err) return res.status(500).send({ message: 'Error al eliminar' });
            if (!data) return res.status(404).send({ message: 'No existe un dato a eliminar' });
            return res.status(200).send({
                message: 'Tarea elimada'
            });
        });
    },

    /**
     * @param {Object} req req id and body by user.
     * @param {Object} res sending object as response.
     * @returns Task object updated or it's respective error.
     */
    updateTask: function (req, res) {
        let id = req.params.id;
        let body = req.body;
        let error = false;
        let valid = [];

        if (body.title == null || !isNaN(body.title)) {
            valid.push(' el título es incorrecto');
        }
        if (body.description == null || !isNaN(body.description)) {
            valid.push(' la descripción es incorrecta');
        }
        if (body.category == null || !isNaN(body.category)) {
            valid.push(' la categoría es incorrecta');
        }
        if (body.day == null || isNaN(body.day) || body.day.length == 0) {
            valid.push(' el día es incorrecto');
        }
        if (body.month == null || !isNaN(body.month)) {
            valid.push(' el mes es incorrecto');
        }

        // Setting Data
        body.title = body.title.toLowerCase();
        body.description = body.description.toLowerCase();
        body.category = body.category.toLowerCase();
        body.month = body.month.toLowerCase();

        body.title = body.title.slice(0, 1).toUpperCase() + body.title.slice(1);
        body.description = body.description.slice(0, 1).toUpperCase() + body.description.slice(1);
        body.category = body.category.slice(0, 1).toUpperCase() + body.category.slice(1);
        body.month = body.month.slice(0, 1).toUpperCase() + body.month.slice(1);

        if (valid.length == 0) {
            Task.find({ day: body.day, month: body.month, $nor: [{ _id: ObjectId(id) }] }).exec((err, data) => {
                data.map((x) => {
                    if (x.title === body.title) return error = true;
                });
                if (error === false) {
                    Task.findByIdAndUpdate(id, body, { new: true }, (err, data) => {
                        if (err) return res.status(500).send({ message: 'Error al actualizar' });
                        if (!data) return res.status(404).send({ message: 'No existe un dato a actualizar' });
                        return res.status(200).send({
                            task: data
                        });
                    });
                } else {
                    return res.status(500).send({
                        repeated: 'La tarea ya existe'
                    });
                }
            });
        } else {
            return res.status(500).send({
                errors: valid
            });
        }
    },

    /**
     * @param {Object} req request day and month by user.
     * @param {Object} res res sending object as response.
     * @returns Task objects filtered by day and month or it's respective error.
     */
    // Detalle de cada día del mes
    getByDayAndMonth: function (req, res) {
        let day = req.params.day;
        let month = req.params.month;
        Task.find({ day: day, month: month }).exec((err, data) => {
            if (err) return res.status(500).send({ message: 'A ocurrido un error.' });
            if (!data) return res.status(404).send({ message: 'Error al obtener los datos.' });
            if (data.length == 0) {
                res.status(200).send({ tasks: [] });
            } else {
                res.status(200).send({
                    tasks: data
                });
            }
        });
    },

    /**
     * @param {Object} req request month by user.
     * @param {Object} res res sending object as response.
     * @returns Quantity of each category filtered by month.
     */
    getCategoriesByMonth: function (req, res) {
        let month = req.params.month;
        let notes = 0;
        let birthday = 0;
        let tasks = 0;
        let projects = 0;
        Task.find({ month: month }).exec((err, data) => {
            if (err) return res.status(500).send({ message: 'A ocurrido un error.' });
            if (!data) return res.status(404).send({ message: 'Error al obtener los datos.' });
            if (data.length == 0) {
                return res.status(200).send({ message: "No existen registros en este mes." });
            }
            notes = data.filter((x) => x.category === "Note").length;
            birthday = data.filter((x) => x.category === "Birthday").length;
            tasks = data.filter((x) => x.category === "Task").length;
            projects = data.filter((x) => x.category === "Project").length;
            return res.status(200).send({
                notes: notes,
                birthday: birthday,
                tasks: tasks,
                projects: projects
            });
        });
    },

    verifyToken: function(req, res, next) {
        if(!req.headers.authorization) return res.status(500).send({message: 'Solcitud denegada'});
        let token = req.headers.authorization.split(' ')[1];
        if(token === null) return res.status(500).send({message: 'Solcitud denegada'});

        // Devuelve el id de ese token
        const data = jwt.verify(token, 'secretKey');
        req.userId = data._id;
        next();
    }

}


module.exports = TaskController;