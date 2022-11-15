const controller = require('../controllers/controller');
module.exports = (app) => {
    app.get('/api/pirate', controller.findAll);
    app.get('/api/pirate/:id', controller.findById);
    app.post('/api/pirate', controller.createOne);
    app.delete('/api/pirate/:id', controller.deleteById);
    app.put('/api/pirate/:id', controller.editById);
}