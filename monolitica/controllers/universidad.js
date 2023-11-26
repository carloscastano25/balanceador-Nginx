const { request, response } = require('express');
const Universidad= require('../models/universidad');

// crear
const createUniversidad = async (
        req = request, res = response
    ) => {

    try{
        const  { nombre } = req.body
        const universidadBD = await Universidad.findOne({ nombre });
        if(universidadBD){// ya existe la univerdidad
            return res.status(400).json({msg: 'Ya existe la universidad'});
        }
        const datos = {
            nombre
        };
        const universidad = new Universidad(datos)

        await universidad.save()

        return res.status(201).json(universidad)
    }catch(e) {
        return res.status(500).json({mjs: e})
    }

 }

 
// consultar todos
const getUniversidades = async (req, res = response) => {
    try{
        const universidadBD = await Universidad.find()
        return res.json(universidadBD);
    }catch(e){
        return res.status(500).json({mjs: e})
    }

}

/**
 * Consultar por ID
 */
const getUniversidadPorId = async (req = request, res = response) => {
    try{
        const { id }  = req.params;
        const query = { _id: id };
        const universidad = await Universidad.findOne(query);
        return res.json(universidad);
    }catch(e){
        return res.status(500).json({msg: e});
    }
}

/**
 * Actualiza por ID
 */
const updateUniversidadPorId = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const data = req.body;// destructuring, spread (...)
        data.fechaActualizacion = new Date()
        const universidad = await Universidad.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(universidad);
    }catch(e){
        return res.status(500).json({msg: e});
    }
}


module.exports = {
    createUniversidad,
    getUniversidades,
    getUniversidadPorId,
    updateUniversidadPorId
}