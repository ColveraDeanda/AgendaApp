var Task = require('../models/task.model');

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
            valid.push('El título es incorrecto');
        }
        if (task.description == null || !isNaN(task.description)) {
            valid.push('La descripción es incorrecta');
        }
        if (task.category == null || !isNaN(task.category)) {
            valid.push('La categoría es incorrecta');
        }
        if (task.day == null || isNaN(task.day)) {
            valid.push('El día es incorrecto');
        }
        if (task.month == null || !isNaN(task.month)) {
            valid.push('El mes es incorrecto');
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
                    return res.status(200).send({
                        message: 'La tarea ya existe'
                    });
                }
            });
        } else {
            return res.status(200).send({
                errors: valid
            });
        }
    },

    /**
     * @param {object} res sending object as response.
     * @returns Tasks Objects in array or it's respective error.
     */
    getTasks: function (err, res) {
        Task.find((err, data) => {
            if (err) return res.status(500).send({ message: 'A ocurrido un error.'});
            if (!data) return res.status(404).send({ message: 'No hay registros a mostrar'});
            if(data.length == 0) {
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
            if (err) return res.status(500).send({ message: 'Error al guardar' });
            if (!data) return res.status(404).send({ message: 'La tarea no existe' });
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
            if (err) return res.status(500).send({ message: 'Error al guardar' });
            if (!data) return res.status(404).send({ message: 'Error al guardar' });
            return res.status(200).send({
                message: 'Tarea elimada'
            });
        });
    },

    updateTask: function (req, res) {

    }

}


module.exports = TaskController;