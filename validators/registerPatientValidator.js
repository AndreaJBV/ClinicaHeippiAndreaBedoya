const { check } = require("express-validator");
const validationResults = require("../utils/handleValidator")
const validatorCreateItem = [
    check("identification").exists(),
    check("name").exists(),
    check("birthdate").exists(),
    check("medicalObservations").exists(),
    check("healthCondition").exists(),
    check("doctorIdentification").exists(),
    check("doctorName").exists(),
    check("medicalSpeciality").exists(),
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

const validatorGetItemDoctorIdentification = [
    check("doctorIdentification").exists()
    .notEmpty(),
    (req, res, next) => {
        return validationResults(req, res, next)
    }
];

module.exports = {validatorCreateItem,validatorGetItem,validatorGetItemDoctorIdentification};
