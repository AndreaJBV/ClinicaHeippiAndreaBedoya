const mongoose = require("mongoose");

const registerPatientScheme = new mongoose.Schema (
    {
        identification:{
            type: Number,
        }, 
        name:{
            type: String
        },
        birthdate:{
            type :Date,
            default: null
        }, 
        medicalObservations:{
            type: String,
            default: null
        },
        healthCondition:{
            type: String,
            default: null
        },
        doctorIdentification:{
            type: Number,
            default: null
        },
        doctorName:{
            type: String,
            default: null
        },
        medicalSpeciality:{
            type: String,
            default: null
        }
        
    },
    {
        timestamps: true, //createdAT, updateAt
        versionKey: false
    }
);

module.exports = mongoose.model("registerPatient", registerPatientScheme);