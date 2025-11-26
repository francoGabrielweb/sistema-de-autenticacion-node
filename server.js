import express from "express"
import cors from  "cors"
import  dotenv from "dotenv"


dotenv.config()




const PATH = process.env.PORT 

const  app =  express()

app.use(cors())

app.listen(PATH , ()=> {
  
    console.log("todo listo corre en el puerto:" + PATH)

})