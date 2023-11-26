const { Schema, model } = require('mongoose');

const EtapaSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'Nombre es requerido']
    },
    estado: {
        type: String,
        required: [true, 'Estado es requerido'],
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
});

module.exports = model('Etapa', EtapaSchema);