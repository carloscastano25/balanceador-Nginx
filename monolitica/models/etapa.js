const { Schema, model } = require('mongoose');

const EtapaSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'Nombre es requerido'],
        unique: true
    },
    estado: {
        type: String,
        required: [true, 'Estado es requerida'],
        unique: true
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