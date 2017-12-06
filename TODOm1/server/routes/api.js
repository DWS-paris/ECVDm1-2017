// Configuration du module
let express = require('express');
let router = express.Router();

// Importer le service
let myService = require('../service/todo.service');

// Configuration de la route principale => http://localhost:8080/api/
router.get('/todoes', (req, res, next) => {
    myService.getAll(data => res.json(data));
});

router.get('/todo/:id', (req, res, next) => {
    myService.eraseTodo(parseInt(req.params.id), data => res.json(data))
});

// Export du module
module.exports = router;