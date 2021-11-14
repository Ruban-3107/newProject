
const express = require("express")
const router=require("./router.js")
const dotenv=require("dotenv")
const cors=require("cors")

dotenv.config({path:".env"})
const port=process.env.port || 8080
const app =new express()

app.use("/",router)
app.use(cors({origin:("http://127.0.0.1:5500")}))


app.listen(port,()=>{
    console.log("running",port)
})