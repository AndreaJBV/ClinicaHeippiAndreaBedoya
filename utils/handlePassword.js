const bcryptjs = require("bcryptjs");


/**
 * Unencrypted password
 * @param {*} passwordPlain 
 */
const encrypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain,10);
    return hash;
};

/**
 * Pass unencrypted password and pass encrypted password
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 */
const compare = async (passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword);
};

module.exports = {encrypt,compare};