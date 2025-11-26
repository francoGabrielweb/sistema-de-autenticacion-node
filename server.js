import express from "express"
import cors from  "cors"
import  dotenv from "dotenv"
import { pool } from './src/config/db.js';


dotenv.config()




const PATH = process.env.PORT 

const  app =  express()

app.use(cors())

app.get("/api/users" , async (req , res)=> {

    const query = "SELECT * FROM users"


    const [rows] =  await pool.query(query)

     res.status(200).json({
      success: true,
      data: rows
    });







   


})

app.listen(PATH , ()=> {
  
    console.log("todo listo corre en el puerto:" + PATH)

})