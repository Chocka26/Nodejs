const Food = require("../Models/FoodModels")

const { body , validationResult } = require("express-validator")

exports.insert = [
    body ("title").trim().isLength({min: 1}).withMessage("Title cannot be empty"), 
    // body ("title").trim().isAlphanumeric().withMessage("Title can contain only letters"), 
    body ("description").trim().isLength({min: 10}).withMessage("Cannot be less than 10 characters"),
    body ("isbn").trim().isLength({min : 1}).withMessage("ISBN cannot be empty")
    .custom((value)=>{
        return Food.findOne({isbn : value})
        .then((food)=>{
            if(food)
                return Promise.reject("ISBN already exist")
        })
    }),
    (req,res)=>{
        const errors = validationResult(req)
        // console.log(errors)
        if(!errors.isEmpty()){
            return res.status(200).send(errors)
        }else{
            const food = new Food({
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                price: req.body.price,
                isbn: req.body.isbn
            })

            food.save()
            .then((food)=>{
                return res.status(200).send(food)
            })
            .catch((err)=>{
                return res.status(200).send(err.message)
            })
        }
        
    }
]

exports.list = [
    (req , res , next)=>{
        console.log("List called")
        next()
    },
    
    
    (req,res)=>{
    Food.find()
    
    .then((foods)=>{
        return res.status(200).send(foods)
    })
    .catch((err)=>{
        return res.status(200).send(err.message)
    })
}]

exports.find = [(req,res)=>{
    console.log("Entering controller")
    console.log("Id is " + req.params.id)
    Food.find({_id: req.params.id})
    .then((foods)=>{
        return res.status(200).send(foods)
    })
    .catch((err)=>{
        return res.status(200).send(err.message)
    })
}]

exports.delete = [(req,res)=>{
    Food.deleteOne({_id: req.params.id})
    .then(()=>{
        return res.status(200).send("success")
    })
    .catch(()=>{
        return res.status(200).send(err.message)
    })
}]

exports.update = [(req,res)=>{
    Food.updateOne(
        {_id: req.params.id},
        {$set: {
            title: req.body.title,
            description: req.body.description,
            isbn: req.body.isbn

        }}
    )
    .then((food)=>{
        return res.status(200).send(food)
    })
    .catch((err)=>{
        return res.status(200).send(err.message)
    })
}]