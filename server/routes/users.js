const express = require('express');
const router = express.Router();
const cors = require("cors");

const mysqlConnection  = require('../db/db');



router.post('/register/',(req,res)=>{
  const {userEmail,password}=req.body;
  //const abreviatura = req.body.mod
  mysqlConnection.query(`INSERT INTO users (correo, contrasena) VALUES ('${userEmail}', '${password}')`,(err,rows,fields)=>{
    if(!err){
      res.json({message: "Usuario registrado"});
    }
    else{
      res.json({message: "Usuario no registrado"});
    }
  });
});

router.post('/login/',(req,res)=>{
  const {userEmail,password}=req.body;
  //const abreviatura = req.body.mod
  console.log(userEmail,password)
  mysqlConnection.query(`SELECT * FROM users WHERE correo='${userEmail}' AND contrasena='${password}'`,(err,rows,fields)=>{
    if(!err){
      res.json({message: "Bienvenido"});
    }
    else{
      console.log(err);
      res.json({message: "Correo y/o contraseña erroneos"});
    }
  });
});



module.exports =router