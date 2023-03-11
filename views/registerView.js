const express = require("express");
const router = express.Router();
const {validatorCreateItem} = require("../validators/registerValidator");
const {validatorGetItem} = require("../validators/registerValidator");
const {validatorRegisterHospitalDoctor} = require("../validators/registerValidator");
const {validatorRegisterHospitalOther} = require("../validators/registerValidator");
const {validatorRegisterPatient} = require("../validators/registerValidator");
const {validatorLogin} = require("../validators/registerValidator");
const {getItemsRegister, getItemRegister, createItemRegister, updateItemRegister, deleteItemRegister, loginController}= require("../controllers/registerController");

//TODO http://localhost/registerView GET, POST, DELETE, PUT
/**
 * List all Items
 */
router.get("/", getItemsRegister);
/**
 * Get a item
 */
router.get("/:identification",validatorGetItem, getItemRegister);
/**
 * Create a register
 */
router.post("/",validatorCreateItem,createItemRegister);
/**
 * Update a item
 */
router.put("/identification",validatorGetItem, validatorCreateItem, updateItemRegister);
/**
 * Delete a item
 */
router.delete("/", deleteItemRegister);

/**
 * Create a registerHospitalDoctor
 */
//TODO: http://localhost:3000/api/registerView/registerhospitaldoctor
router.post("/registerhospitaldoctor",validatorRegisterHospitalDoctor,createItemRegister);

/**
 * Create a registerhospitalother
 */
//TODO: http://localhost:3000/api/registerView/registerhospitalother
router.post("/registerhospitalother",validatorRegisterHospitalOther,createItemRegister);

/**
 * Create a registerhospitalpatient
 */
//TODO: http://localhost:3000/api/registerView/registerpatient
router.post("/registerpatient",validatorRegisterPatient,createItemRegister);

/**
 * Create a register
 */
//TODO http://localhost:3000/api/registerView/login
router.post("/login",validatorLogin, loginController);



module.exports = router;