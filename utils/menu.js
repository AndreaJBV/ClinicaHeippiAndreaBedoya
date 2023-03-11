const inquirer = require('inquirer');
require('colors');
const prompt = require('prompt-sync')();
const {getItemsRegister, getItemRegister, createItemRegister, updateItemRegister, deleteItemRegister, loginController}= require("../controllers/registerController");

const inquirerMenu = async() => {
    console.clear();
    console.log("\n");
    console.log("\n");
    console.log('---------- BIENVENID@ AL SISTEMA DE GESTIÓN DE ---------'.cyan);
    console.log('------------------- HISTORIA CLÍNICA -------------------'.cyan);
    console.log('------------------------ HEIPPI ------------------------'.cyan);
    console.log("\n");
/*
    let userOption= '';
    let identification1 = '';
    let identification  = '';
    let password = '';
    let newPassword = '';
    let typeUser = '';
    let typeHospitalUser = ''
    


    do{
        console.log('Por favor elegir una opción:');
        console.log(`${'1.'.green} Iniciar sesión.`);
        console.log(`${'2.'.green} Registrarse.`);
        console.log(`${'3.'.green} Salir.`);
        userOption = prompt('');
        
        switch (userOption) {
            case '1':
                console.log('Entro al login');
                console.log('Ingresar identificación:');
                identification1 = prompt('');
                identification = parseInt(identification1);

                console.log('Ingresar la contraseña:');
                password = prompt(''); 

                const login = loginController(identification,password);
                console.log(login);

                break;
            case '2':
                console.log('Entro al registrar');
                break;
            case '3':
                console.log('salir');
                break;
        
            default:
                console.log('Esta opción no existe');
                break;
        }
    }while(userOption !=='3')*/
    
}


module.exports = {inquirerMenu}