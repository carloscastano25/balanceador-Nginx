const { request, response } = require('express');
const Etapa = require('../models/etapa');

// crear
const createEtapa = async (
        req = request, res = response
    ) => {

    try{
        const  { nombre } = req.body
        const etapaBD = await etapa.findOne({ nombre });
        if(etapaBD){
            return res.status(400).json({msg: 'Ya existe el etapa'});
        }
        const datos = {
            nombre
        };
        const etapa = new Etapa(datos)

        await etapa.save()

        return res.status(201).json(etapa)
    }catch(e) {
        return res.status(500).json({mjs: e})
    }

 }

 
// consultar todos
const getEtapas = async (req, res = response) => {
    try{
        const etapaBD = await Etapa.find()
        return res.json(etapasBD);
    }catch(e){
        return res.status(500).json({mjs: e})
    }

}

/**
 * Consultar por ID
 */
const getEtapaPorId = async (req = request, res = response) => {
    try{
        const { id }  = req.params;
        const query = { _id: id };
        const etapa = await Etapa.findOne(query);
        return res.json(etapa);
    }catch(e){
        return res.status(500).json({msg: e});
    }
}

/**
 * Actualiza por ID
 */
const updateEtapaPorId = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const data = req.body;// destructuring, spread (...)
        data.fechaActualizacion = new Date()
        const etapa = await Etapa.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(etapa);
    }catch(e){
        return res.status(500).json({msg: e});
    }
}

/**
 * Borrar por ID
 */
const deleteEtapaByID = async (req = request, res = response) => {
    // try- catch
  /*  const id = req.params.id;
    const etapa = await Etapa.findByIdAndDelete(id);
    res.status(204).json(etapa);*/
}


module.exports = {
    createEtapa,
    getEtapas,
    getEtapaPorId,
    updateEtapaPorId
}