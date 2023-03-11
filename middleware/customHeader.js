const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers.api_key;
        if(apiKey === "user-23"){
            next();
        }else{
            res.status(403);
            resizeTo.send({error: "API_KEY_INCORRECTA"});
        }
    } catch (error) {
        res.status(403);
        res.send({error: "ALGO_OCURRIO!"});
    }
}

module.exports =customHeader;