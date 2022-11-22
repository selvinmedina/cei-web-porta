const express= require('express');
const router= express.Router();
const config= require('../lib/config');
const sql = require('mssql');
const PostulacionModule = require('../class/Postulacion')


router.get('/postulacion',async(req,res)=>{
    try {
        let data = {...req.body,...req.params};
        let postulacion = new PostulacionModule(data);
        let pool =  await sql.connect(config);
        let response = await pool.request().query(postulacion.queryGet);
        if (response.rowsAffected <= 0){ throw "No existe datos con esos parámetros"};
        res.status(200).json(response.recordsets)
    } catch (error) {
        console.error(`Hay clavo tio ${error}`)
        res.status(300).json({error:`Hay clavo tio ${error}`})
    }
})

router.get('/postulacion/:id',async(req,res)=>{
    try {
        let data = {...req.body,...req.params};
        let postulacion = new PostulacionModule(data);
        let pool =  await sql.connect(config);
        let response = await pool.request()
            .input('id',sql.Int,postulacion.id)
            .query(postulacion.queryGetById);
        if (response.rowsAffected <= 0){ throw "No existe datos con esos parámetros"};
        res.status(200).json(response.recordsets)
    } catch (error) {
        console.error(`Hay clavo tio ${error}`)
        res.status(300).json({error:`Hay clavo tio ${error}`})
    }
})

router.post('/postulacion',async(req,res)=>{ //agregar
    try {
        let data = {...req.body,...req.params};
        
        let pool =  await sql.connect(config);
        const sede = [
            'San Pedro Sula',
            'Tegucigalpa',
            'La Ceiba'
        ]
        const rubro = [
            "comercial",
            "social",
            "emprendimiento",
            "healt_care",
            "artesanal",
        ];
        const expectativas=['mentorias',
        'formación',
        'networking', 
        'testeo', 
        'formalización', 
        'conexiones',
        'espacio_cei', ];
        console.log("test",sede.findIndex(elem=> elem==data.sede)+1);
        let prepostulacion = {
            representante: data.representante,
            correo: data.correo,
            cuenta:data.cuenta,
            celular:data.celular,
            genero:data.genero=="Masculino"?1:(data.genero=="Femenino"?2:3),
            tipo:data.tipo,
            descripcion:data.descripcion,
            sede:sede.findIndex(elem=> elem==data.sede)+1,
            redesSociales:data.redesSociales=="Si"?1:0,
            rubro:rubro.findIndex(elem=> elem==data.rubro)+1,
            equipoTrabajo:data.equipoTrabajo=="Si"?1:0,
            expectativas:expectativas.findIndex(elem=> elem==data.expectativas)+1,
            estado:1,
        };
        let postulacion = new PostulacionModule(prepostulacion);
        // console.log(postulacion);
        let response = await pool.request()
            .input('representante',sql.VarChar, postulacion.representante)
            .input('correo',sql.VarChar, postulacion.correo)
            .input('cuenta',sql.VarChar,postulacion.cuenta)
            .input('celular',sql.VarChar,postulacion.celular)
            .input('genero',sql.TinyInt,postulacion.genero)
            .input('tipo',sql.Int,postulacion.tipo)
            .input('descripcion',sql.VarChar,postulacion.descripcion)
            .input('sede',sql.Int,postulacion.sede)
            .input('redesSociales',sql.TinyInt,postulacion.redesSociales)
            .input('rubro',sql.TinyInt,postulacion.rubro)
            .input('equipoTrabajo',sql.TinyInt,postulacion.equipoTrabajo)
            .input('expectativas',sql.TinyInt,postulacion.expectativas)
            .input('estado',sql.TinyInt,1) //comienza con 1 por que es el inicio
            .query(postulacion.querySave);
        if (response.rowsAffected <= 0){ throw "No existe datos con esos parámetros"};
        res.status(200).json({messaje:"Se guardo correctamente",data:data})
    } catch (error) {
        console.error(`Hay clavo tio ${error}`)
        res.status(300).json({error:`Hay clavo tio ${error}`})
    }
})

router.put('/postulacion/:id',async(req,res)=>{ //modificar
    try {
        let data = {...req.body,...req.params};
        let postulacion = new PostulacionModule(data);
        let pool =  await sql.connect(config);
        let response = await pool.request()
            .input('id',sql.Int, postulacion.id)
            .input('representante',sql.VarChar, postulacion.representante)
            .input('correo',sql.VarChar, postulacion.correo)
            .input('cuenta',sql.VarChar,postulacion.cuenta)
            .input('celular',sql.VarChar,postulacion.celular)
            .input('genero',sql.TinyInt,postulacion.genero)
            .input('tipo',sql.Int,postulacion.tipo)
            .input('descripcion',sql.VarChar,postulacion.descripcion)
            .input('sede',sql.Int,postulacion.sede)
            .input('redesSociales',sql.TinyInt,postulacion.redesSociales)
            .input('rubro',sql.TinyInt,postulacion.rubro)
            .input('equipoTrabajo',sql.TinyInt,postulacion.equipoTrabajo)
            .input('expectativas',sql.TinyInt,postulacion.expectativas)
            .input('estado',sql.TinyInt,postulacion.estado)
            .input('fechaCerrado',sql.DateTime,postulacion.fechaCerrado)
            .query(postulacion.queryUpdate);
            res.status(200).json({message:"Modificado con exito",data:data})
        res.status(200).json(response)
    } catch (error) {
        console.error(`Hay clavo tio ${error}`)
        res.status(300).json({error:`Hay clavo tio ${error}`})
    }
})
router.delete('/postulacion/:id',async(req,res)=>{ //eliminar
    try {
        let data = {...req.body,...req.params};
        let postulacion = new PostModule(data);
        let pool =  await sql.connect(config);
        let response = await pool.request()
            .input('id',sql.Int,postulacion.id)
            .query(postulacion.queryDelete);
        res.status(200).json({message:"Datos han sido Eliminados"})
    } catch (error) {
        console.error(`Hay clavo tio ${error}`)
        res.status(300).json({error:`Hay clavo tio ${error}`})
    }
})

module.exports = router;