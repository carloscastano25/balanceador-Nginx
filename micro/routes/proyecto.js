const { Router } = require('express');
const { 
    createProyecto,
    getProyectos,
    getProyectoPorId, 
    updateProyectoPorId,
} = require('../controllers/proyecto');

const router = Router();

/**
 * Obtiene todos 
 */
router.get('/', getProyectos);

/**
 * Obtiene por id
 */
router.get('/:id', getProyectoPorId);

/**
 * Crear 
 */
router.post('/', createProyecto);

/**
 * Actualiza por id
 */
router.put('/:id', updateProyectoPorId);


module.exports = router;