const { check } = require("express-validator");
const validationResults = require("../utils/handleValidator");

const validatorCreateItem = [
    check("identification").exists()
    .notEmpty(),
    check("email").exists()
    .notEmpty(),
    check("telephone").exists()
    .notEmpty(),
    check("password").exists()
    .notEmpty(),
    check("name").exists()
    .notEmpty(),
    check("address").exists()
    .notEmpty(),
    check("medicalServices").exists(),
    check("birthdate").exists(),
    check("typeOfUser").exists()
    .notEmpty(),
    check("typeOfUserHospital").exists(),
    (req, res, next) => {
        return validationResults(req, res, next)
    }
];

const validatorGetItem = [
    check("identification").exists()
    .notEmpty(),
    (req, res, next) => {
        return validationResults(req, res, next)
    }
];

const validatorRegisterHospitalDoctor = [
    check("identification").exists()
    .notEmpty(),
    check("email").exists()
    .notEmpty(),
    check("telephone").exists(),//null
    check("password").exists()
    .notEmpty(),
    check("name").exists()
    .notEmpty(),
    check("address").exists()
    .notEmpty(),
    check("medicalServices").exists()
    .notEmpty(),
    check("birthdate").exists(),//null
    check("typeOfUser").exists()
    .notEmpty(),
    check("typeOfUserHospital").exists()
    .notEmpty(),
    (req, res, next) => {
        return validationResults(req, res, next)
    }
];

const validatorRegisterHospitalOther = [
    check("identification").exists()
    .notEmpty(),
    check("email").exists()
    .notEmpty(),
    check("telephone").exists(),//null
    check("password").exists()
    .notEmpty(),
    check("name").exists()
    .notEmpty(),
    check("address").exists()
    .notEmpty(),
    check("medicalServices").exists(),//null
    check("birthdate").exists(), //null
    check("typeOfUser").exists()
    .notEmpty(),
    check("typeOfUserHospital").exists()
    .notEmpty(),
    (req, res, next) => {
        return validationResults(req, res, next)
    }
];

const validatorRegisterPatient = [
    check("identification").exists()
    .notEmpty(),
    check("email").exists()
    .notEmpty(),
    check("telephone").exists()
    .notEmpty(),
    check("password").exists()
    .notEmpty(),
    check("name").exists()
    .notEmpty(),
    check("address").exists()
    .notEmpty(),
    check("medicalServices").exists(),//null
    check("birthdate").exists()
    .notEmpty(),
    check("typeOfUser").exists()
    .notEmpty(),
    check("typeOfUserHospital").exists(),//null
    (req, res, next) => {
        return validationResults(req, res, next)
    }
];
const validatorLogin= [
    check("identification").exists()
    .notEmpty(),
    check("password").exists()
    .notEmpty(),
    (req, res, next) => {
        return validationResults(req, res, next)
    }
];

module.exports = {validatorCreateItem,validatorGetItem,validatorRegisterHospitalDoctor,validatorRegisterHospitalOther,validatorRegisterPatient, validatorLogin};