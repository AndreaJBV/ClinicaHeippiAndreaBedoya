const mongoose = require("mongoose");

const registerScheme = new mongoose.Schema (
    {
        identification:{
            type: Number,
            unique: true
        }, 
        email:{
            type: String
        }, 
        telephone:{
            type: Number
        }, 
        password: {
            type: String,
            strict: false
        },
        name:{
            type: String
        },
        address:{
            type: String
        },
        medicalServices:{
            type: String,
        },
        birthdate:{
            type :Date,
            default: null
        }, 
        typeOfUser:{ //1.Hospital, 2.Patient
            type: String,
            default: 1
        }, 
        typeOfUserHospital:{ //1.Doctor, 2.Other, 3.none
            type: String,
            default: null
        }
        
    },
    {
        timestamps: true, //createdAT, updateAt
        versionKey: false
    }
);

module.exports = mongoose.model("register", registerScheme);