var User = require('../models/user.model');
var jwt = require('jsonwebtoken');

const UserController = {

    signUp: function(req, res) {
        let repeat = false;
        let user = new User();
        user.email = req.body.email;
        user.password = req.body.password;

        User.find((err, users) => {
            users.map((x) => {
                if(x.email === user.email) {
                   repeat = true;
                }
            });
            if(repeat === false) {
                user.save(user, (err, data) => {
                    if(err) return res.status(500).send({ message: 'Error al guardar'});
                    if(!data) return res.status(404).send({ message: 'No se ha podido guardar'});
                    const token = jwt.sign({_id: data._id}, 'secretKey');
                    res.status(200).send({
                        token: token
                    }); 
                });
            } else {
                res.status(500).send({ message: 'El correo ya existe'});
            }
        });
    },

    signIn: async function(req, res) {
        let email = req.body.email;
        let password = req.body.password;

        let user = await User.findOne({email: email});
        if(!user) return res.status(401).send({message: 'Debe registrarse para continuar'});
        if(user.password != password) return res.status(401).send({message: 'La contraseña no coincide con el correo.'});

        let token = jwt.sign({_id: user._id}, 'secretKey');
        res.status(200).send({
            token: token
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

module.exports = UserController;