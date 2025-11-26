import mysql from "mysql2"


export const pool  =  mysql.createPool({
   
    host : process.env.DBHOST ,
    password : process.env.DBPASS,
    user : process.env.DBUSER,
    port:process.env.DBPORT,
    database :process.env.DBNAME


})