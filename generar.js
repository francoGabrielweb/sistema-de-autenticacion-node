const fs =  require("fs") 
const path =  require("path")



const Name =   "nuevo proyecto"



 const dir = [
    "" ,
    "src/",
    "src/config",
    "src/module",
    "src/repositor",
    "src/controller",
    "src/router"
]


dir.forEach( (d)=>fs.mkdirSync(path.join(Name , d), {recursive:true} ))

