module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');
    const middleware = require('../../app/middleware/auth.js');
    const auth = middleware.verify;

    app.get('/auth', middleware.auth);
    app.post('/login', middleware.login);
    // app.get('/login', middleware.login);

    app.get('/notes/:noteId', notes.findOne);
    app.put('/notes/:noteId', notes.update);
    
    // ENDPOINTS WITH REQUIRED AUTHENTICATION
    app.post('/notes', auth, notes.create);
    app.get('/notes', auth, notes.findAll);
    app.delete('/notes/:noteId', auth, notes.delete);
};