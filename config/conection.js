const { Sequelize } = require('sequelize');

const databaseInfo = require('./env');
const DB_USER = databaseInfo.USER;
const DB_PASSWORD = databaseInfo.PASSWORD;
const DB_HOST = databaseInfo.HOST;
const DB_PORT = databaseInfo.PORT;
const DB = databaseInfo.DB;
const path = `mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB}`;

/* Creating a new instance of Sequelize. */
const conection = new Sequelize(path, {
    dialect: 'mysql',
    operatorsAliases: 0 ,
    logging: false,
});

/* Checking if the connection is working. */
conection.authenticate()
    .then(() => {
        console.log('Conectado.');
    }).catch(err => {
        console.error('Error de conexion: ', err);
    });

module.exports = conection;