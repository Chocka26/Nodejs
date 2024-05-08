const express = require("express")

const router =express.Router();

// router.get("/user",(req,res,next)=>{
//     res.status(200).send("User Inserted")
// })

// router.delete("/user",(req,res,next)=>{
//     res.status(200).send("User Deleted")
// })

// router.put("/user",(req,res,next)=>{
//     res.status(200).send("user Updated")
// })

router.all("/user",(req,res,next)=>{
    console.log("User Operation")
    res.set("Content-Type","application/json")
    //Authentication validation
    res.status(200)
    next()
})

.get("/user",(req,res)=>{
    res.send("get method")
})

.delete("/user",(req,res)=>{
    res.send("delete method")
})

.put("/user",(req,res)=>{
    res.send("put method")
})

module.exports = router