const{handleHttpError} = require("../utils/handleError")
const {verifyToken} = require ("../utils/handleJwt")

const authMiddleware = async (req, res, netx) => {
    try {
        if (!req.headers.authorization) {
            handleHttpError(res, "NOT_TOKEN", 401);
            return
        }

        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token);

        if(!dataToken.identification){
            handleHttpError(res, "ERROR_IDENTIFICATION_TOKEN", 401);
            return
        }

    } catch (error) {
        handleHttpError(res, "NOT_SESSION", 401);
    }

    netx();
};

module.exports = authMiddleware