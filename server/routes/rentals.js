const express= require('express');
const Routes = express.Router();
const Rental = require('../models/rentalschema');
Routes.get('',function(req,res){
   Rental.find({},function(err,foundRental){
    res.json(foundRental);
   })
});
Routes.get('/:id',function(req,res){
    const rentalId = req.params.id;
    Rental.findById(rentalId,function(er,foundRental){
        res.json(foundRental);
    });
});
module.exports =Routes;