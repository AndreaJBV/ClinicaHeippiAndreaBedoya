const jsonwebtoken = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;


/**
 * The user object must be passed
 * @param {*} user 
 */
const tokenSingn = async (user) =>{
    const sing = jsonwebtoken.sign(
        {
            identification: user.identification
        },
        JWT_SECRET,
        {
            expiresIn: "4h",
        }
    );
    return sing
};
/**
 * Session token JWT must be passed
 * @param {*} tokenJwt 
 * @returns 
 */
const verifyToken = async (tokenJwt) => {
    try {
        return jsonwebtoken.verify(tokenJwt, JWT_SECRET)
    } catch (error) {
        return null;
    }
};

const decodeSign = (token) => {
    return jsonwebtoken.decode(tokenJwt, null);
  };

module.exports = {tokenSingn,verifyToken,decodeSign}