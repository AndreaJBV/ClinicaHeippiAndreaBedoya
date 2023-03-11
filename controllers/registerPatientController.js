const {registerPatientModel} = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");
const fs = require('fs');
var express = require("express");
var app = express();

/**
 * Get database list of all registersPatient
 * @param {*} req 
 * @param {*} res 
 */
const getItemsRegisterPatient = async (req, res) => {//It allows calling all items 
    try {
        const data = await registerPatientModel.find({});
        res.send({data});
    } catch (error) {
        handleHttpError(res,'Error_Get_Items');
    }
    
};

/**
 * Get database one registerPatient
 * @param {*} req 
 * @param {*} res 
 */
const getItemRegisterPatient = async (req, res) => {// It allows to call an item
    try {
        req = matchedData(req);
        const {identification} = req;
        const data = await registerPatientModel.find({identification: identification});
        
        res.send({data});

    } catch (error) {
        handleHttpError(res,'Error_Get_Items');
    }
    
};
const downloadFile= async (req,res) =>{
    req = matchedData(req);
    const {identification} = req;
    const data = await registerPatientModel.find({identification: identification})
    res.setHeader("Content-disposition", "attachment; filename=ObservacionesPaciente.txt");
    res.setHeader("Content-type", "text/plain");
    res.charset = "UTF-8";
    res.write(JSON.stringify(data));
    res.end();
}


/**
 * Get database one registerPatient whit doctorIdentification
 * @param {*} req 
 * @param {*} res 
 */
const getItemRegisterPatientDoctorIdentification = async (req, res) => {// It allows to call an item
    try {
        req = matchedData(req);
        const {doctorIdentification} = req;
        const data = await registerPatientModel.find({doctorIdentification: doctorIdentification});
        res.send({data});
    } catch (error) {
        handleHttpError(res,'Error_Get_Items');
    }
};

/**
 * Insert a user registerPatient
 * @param {*} req 
 * @param {*} res 
 */
const createItemRegisterPatient = async (req, res) => { //Post
    try {
        const body = matchedData(req)
        const dataRegisterPatient = await registerPatientModel.create(body);
        res.send({dataRegisterPatient});
    } catch (error) {
        handleHttpError(res,'Error_Create_Items');
    }
    
    
};

/**
 * Update a user register
 * @param {*} req 
 * @param {*} res 
 */
const updateItemRegisterPatient = async (req, res) => {//Put 
    try {
        const {identification, ...body }= matchedData(req)
        const dataRegister = await registerPatientModel.findOneAndUpdate(identification,body);
        res.send({dataRegister});
    } catch (error) {
        handleHttpError(res,'Error_UpDateItemRegiterPatient_Items');
    }
};

/**
 * Delete a user register
 * @param {*} req 
 * @param {*} res 
 */
const deleteItemRegisterPatient = async (req, res) => {//Delete
    
 };

module.exports = {downloadFile,getItemsRegisterPatient, getItemRegisterPatient, getItemRegisterPatientDoctorIdentification, createItemRegisterPatient, updateItemRegisterPatient, deleteItemRegisterPatient};//with destructuring