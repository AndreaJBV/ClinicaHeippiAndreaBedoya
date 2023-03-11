const mongoose = require("mongoose");//Mongoose declarator 

const dataBaseConnection = async() => {
    const DB_URI = process.env.DB_URI;
    try {
        await mongoose.connect(
            DB_URI,{
                useNewUrlParser: true,
                useUnifiedTopology: true,
        })
        console.log('¡CONEXIÓN A LA BASE DE DATOS CORRECTA!');
        console.log("\n");
        
    } catch (error) {
        console.log('¡ERROR DE CONEXIÓN A LA BASE DE DATOS!');
        console.log(error)
        process.exit(1)
        
    }
}; 

module.exports = dataBaseConnection

//mongodb+srv://andreab:1234@clusterclinicaheippi.wuk1izy.mongodb.net/dbapi?retryWrites=true&w=majority
