
const { request, response } = require('express');
const Proyecto = require('../models/proyecto');
const Cliente = require('../models/cliente')
const Etapa = require('../models/etapa')
const Universidad = require('../models/universidad')
const TipoProyecto = require('../models/tipoProyecto')
/**
 * crear
 */
const createProyecto = async (req = request, res = response) => {
    try{
         const { cliente, tipoProyecto, etapa, universidad } = req.body;
         console.log(req.body)
         const tipoProyectoBD = await TipoProyecto.findOne({
            _id: tipoProyecto._id
        });
        if(!tipoProyectoBD){
            return res.status(400).json({
                msj: 'No existe tipo Proyecto'
            })
        }
        const clienteBD = await Cliente.findOne({
            _id: cliente._id
        });
        if(!clienteBD){
            return res.status(400).json({
                msj: 'No existe cliente'
            })
        }
        const etapaBD = await Etapa.findOne({
            _id: etapa._id
        });
        if(!etapaBD){
            return res.status(400).json({
                msj: 'No existe etapa'
            })
        }
        const universidadBD = await Universidad.findOne({
            _id: universidad._id
        });
        if(!universidadBD){
            return res.status(400).json({
                msj: 'No existe universidad'
            })
        }
        
         const proyecto = new Proyecto(req.body);
         await proyecto.save();
         return res.status(201).json(proyecto);
     }catch(e){
         return res.status(500).json({
             msj: e
         });
     }
 }
 
/**
 * Consultar todos
 */
const getProyectos = async (req, res = response) => {
    console.log('calling getProyects!')
    try{
        const proyectosBD = await Proyecto.find()
        .populate({
            path: 'cliente'
        })
        .populate({
            path: 'tipoProyecto'
        })
        .populate({
            path: 'etapa'
        })
        .populate({
            path: 'universidad'
        })
        
        return res.json(proyectosBD);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

/**
 * Consultar por ID
 */
 const getProyectoPorId = async (req = request, res = response) => {
   try{
        const { id } = req.params;
        const query = { _id: id};
        const proyectoBD = await Proyecto.findOne(query).populate({
            path: 'cliente', //Aquí puede haber error.
            match: { estado: true }
        });
        // TODO: personalizar error de no encontrado
        res.json(proyectoBD);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

// actualizar por ID
const updateProyectoPorId = async (req = request, res = response) => {
   try{
        const { id } = req.params;
        const data = req.body;// destructuring, spread (...)
    
        const proyectoBD = await Proyecto.findOne({ _id: id});
       if(!proyectoBD){
        return res.status(400).json({
            msj: 'No existe este proyecto'
        });
       } 
        const proyecto = await Proyecto.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(proyecto);
    }catch(e){
        return res.status(500).json({
            error: e
        });
    }
}


module.exports = { 
    createProyecto,
    getProyectos,
    getProyectoPorId,
    updateProyectoPorId
}