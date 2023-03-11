const express = require("express");
const router = express.Router();
const {validatorCreateItem} = require ("../validators/registerPatientValidator")
const {validatorGetItem} = require("../validators/registerPatientValidator");
const {validatorGetItemDoctorIdentification} = require("../validators/registerPatientValidator");
const {downloadFile,getItemsRegisterPatient, getItemRegisterPatient, getItemRegisterPatientDoctorIdentification,createItemRegisterPatient, updateItemRegisterPatient, deleteItemRegisterPatient}= require("../controllers/registerPatientController");


//TODO http://localhost/registerPatientView GET, POST, DELETE, PUT
/**
 * List all items
 */
router.get("/", getItemsRegisterPatient);
/**
 * Get a item
 */
router.get("/identification", validatorGetItem, getItemRegisterPatient);

/**
 * Downloads file patient
 */
router.get("/downloads", validatorGetItem, downloadFile);


/**
 * Get a item the doctorIdentification
 */
router.get("/doctorIdentification", validatorGetItemDoctorIdentification, getItemRegisterPatientDoctorIdentification);

/**
 * Create a item
 */
router.post("/", validatorCreateItem, createItemRegisterPatient);
/**
 * Update a item
 */
router.put("/identification",validatorGetItem, validatorCreateItem,updateItemRegisterPatient);
/**
 * Delete a item
 */
router.delete("/", deleteItemRegisterPatient);

module.exports = router