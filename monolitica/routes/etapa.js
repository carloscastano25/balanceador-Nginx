const { Router } = require('express');

const {
    createEtapa,
    getEtapas,
    getEtapaPorId,
    updateEtapaPorId
} = require('../controllers/etapa');

const router = Router();

// crear
router.post('/', createEtapa);

// consultar todos
router.get('/', getEtapas);

//consultar por ID
router.get('/:id', getEtapaPorId);

// Actualizar por ID
router.put('/:id', updateEtapaPorId);

/**
 * Actualiza una parte de etapa
 */
/*router.patch('/:id', (req, res) => {
    res.json({});
});*/

/**
 * Borra un etapa por id
 */
 //router.delete('/:id', deleteEtapaByID);

module.exports = router;