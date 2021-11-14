const express = require("express")

const router=express.Router()

router.get("/get",(req,res)=>{
    res.send("ruban")
})
module.exports=router;
