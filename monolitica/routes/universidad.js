const { Router } = require('express');

const {
    createUniversidad,
    getUniversidades,
    getUniversidadPorId,
    updateUniversidadPorId
} = require('../controllers/universidad');

const router = Router();

// crear
router.post('/', createUniversidad);

// consultar todos
router.get('/', getUniversidades);

//consultar por ID
router.get('/:id', getUniversidadPorId);

// Actualizar por ID
router.put('/:id', updateUniversidadPorId);

/**
 * Actualiza una parte de universidad
 */
/*router.patch('/:id', (req, res) => {
    res.json({});
});*/

/**
 * Borra una universidad por id
 */
 //router.delete('/:id', deleteUniversidadByID);

module.exports = router;