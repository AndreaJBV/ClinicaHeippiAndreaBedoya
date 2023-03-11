const { matchedData } = require("express-validator");
const {registerModel} = require("../models");
const { handleHttpError } = require("../utils/handleError");
const {encrypt,compare} = require("../utils/handlePassword");
const {tokenSingn,verifyToken} = require("../utils/handleJwt");

/**
 * Get database list of all registers
 * @param {*} req 
 * @param {*} res 
 */
const getItemsRegister = async (req, res) => {//It allows calling all items 
    try {
        const data = await registerModel.find({});
        res.send({data});
    } catch (error) {
        handleHttpError(res,'Error_Get_Items');
    }
    
};

/**
 * Get database one register
 * @param {*} req 
 * @param {*} res 
 */
const getItemRegister = async (req, res) => {// It allows to call an item
    try {
        req = matchedData(req);
        const {identification} = req;
        const data = await registerModel.findOne({identification: identification});
        res.send({data}); 
    } catch (error) {
        handleHttpError(res,'Error_Get_Items');
    }
};

/**
 * Insert a user register
 * @param {*} req 
 * @param {*} res 
 */
const createItemRegister = async (req, res) => { //Post
    try {
        /*req= matchedData(req);
        const password = await encrypt(req.password);
        const body = {...req, password};
        data.set("password",undefined, {strict: false});
        res.send({data});*/

        const body = matchedData(req)
        const dataRegister = await registerModel.create(body);
        //res.send({dataRegister});

        const data = {
            token: await tokenSingn(dataRegister),
            user: dataRegister
        }
        res.send({data});
    } catch (error) {
        handleHttpError(res,'Error_Create_Items');
    }
    
};

/**
 * Update a user register
 * @param {*} req 
 * @param {*} res 
 */
const updateItemRegister = async (req, res) => {//Put 
    try {
        const {identification, ...body }= matchedData(req)
        const dataRegister = await registerModel.findOneAndUpdate(identification,body);
        res.send({dataRegister});
    } catch (error) {
        handleHttpError(res,'Error_UpDateItemRegiter_Items');
    }
};

/**
 * Delete a user register
 * @param {*} req 
 * @param {*} res 
 */
const deleteItemRegister = async (req, res) => {//Delete
    
 };

 /**
 * In charge of logging a person
 * @param {*} req 
 * @param {*} res 
 */
const loginController = async (req, res) => {
    try {
        req = matchedData(req);
        const user = await registerModel.findOne({identification: req.identification, password:req.password});
        //const user = await registerModel.findOne({identification: req.identification}).select('password');
        if(!user){
            handleHttpError(res, "USER_NOT_EXISTS", 404)
            return
        }

        const hashPassword = user.password;
        //const hashPassword = user.get('password');
        
        const check = await compare(req.password, hashPassword);

        /*if(!check){
            handleHttpError(res, "PASSWORD_INVALID", 401);
            return
        }*/

        const data = {
            token: await tokenSingn(user),
            user
        }

        res.send({data});
        
    } catch (error) {
        handleHttpError(res, "Error_login_user")
    }
    return res;

};

module.exports = {getItemsRegister, getItemRegister, createItemRegister, updateItemRegister, deleteItemRegister, loginController};//with destructuring