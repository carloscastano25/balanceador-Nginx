const { Router } = require('express');

const {
    createCliente,
    getClientes,
    getClientePorId,
    updateClientePorId
} = require('../controllers/cliente');

const router = Router();

// crear
router.post('/', createCliente);

// consultar todos
router.get('/', getClientes);

//consultar por ID
router.get('/:id', getClientePorId);

// Actualizar por ID
router.put('/:id', updateClientePorId);

/**
 * Actualiza una parte del clientes
 */
/*router.patch('/:id', (req, res) => {
    res.json({});
});*/

/**
 * Borra un clente por id
 */
 //router.delete('/:id', deleteClienteByID);

module.exports = router;