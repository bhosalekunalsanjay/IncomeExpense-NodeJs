const mysql = require('mysql2');
require('dotenv').config();
const { DB_ERROR_CONNECTING } = require("../utils/globalConstants");


const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME
};
  
const connection = mysql.createConnection(dbConfig);

/**
 * CONNECT TO DATABASE
 */
connection.connect((err) => {
    if (err) console.error(`${DB_ERROR_CONNECTING}: `, err);
    else console.log('Connected to the database');
});
  
module.exports = connection;