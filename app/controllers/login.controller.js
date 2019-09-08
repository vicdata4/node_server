const Login = require('../models/login.model.js');

exports.userExist = (req, res) => {
    console.log('***', req.body);
    Login.findOne({'mail': req.body.mail, 'password': req.body.password })
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });            
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.noteId
        });
    });
};