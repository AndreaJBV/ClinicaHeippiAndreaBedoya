const { handleHttpError } = require("../utils/handleError");
/**
 * Array with the allowed roles
 * @param {*} rol 
 * @returns 
 */
const checkRol = (roles) => (req,res,next) => {
    try {
        const{user} = req;
        const rolesByUser = user.roles;

        const checkValueRol = roles.some((rolSingle) => rolesByUser.includes(rolSingle));
        if(!checkValueRol){
            handleHttpError(res,"USER_NOT_PERMISSIONS",403);
            return
        }
        next();

    } catch (error) {
        handleHttpError(req, "Error_Permissions", 403);
    }
}

module.exports = checkRol;