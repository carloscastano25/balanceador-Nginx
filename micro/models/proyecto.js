const { Schema, model } = require('mongoose');

const ProyectoSchema = Schema({
    numero: {
        type: String,
        required: [true, 'Debe colocar un número'],
        unique: [true, 'El número debe ser único']
    },
    titulo: {
        type: String,
        required: [true, 'Debe colocar un titulo']
    },
    valor: {
        type: String,
        required: [true, 'Debe colocar un valor']
    },
    fechaInicio: {
        type: Date,
        default: new Date()
    },
    fechaEntrega: {
        type: Date,
        default: new Date()
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    },

    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: true
    },
    etapa: {
        type: Schema.Types.ObjectId,
        ref: 'Etapa',
        required: true
    },
    universidad: {
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
        required: true
    }
});

module.exports = model('Proyecto', ProyectoSchema);
/*
{
    "numero": "",
    "cliente": {
        _id: ""
    },
    "tipoProyecto": {
        _id: ""
    }
}*/