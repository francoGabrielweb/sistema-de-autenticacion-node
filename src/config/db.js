import mysql from "mysql2/promise.js"
import dotenv from "dotenv"
dotenv.config() ;

export const pool  =  mysql.createPool({
   
    host : process.env.DBHOST ,
    password : process.env.DBPASS,
    user : process.env.DBUSER,
    port:process.env.DBPORT,
    database :process.env.DBNAME


})