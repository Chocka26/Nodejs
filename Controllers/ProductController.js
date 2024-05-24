const Product = require ('../Models/ProductModel')

exports.insert = [(req,res)=>{
    const product = new Product({

        name: req.body.name,
        description: req.body.description,
        price: req.body.price
        
    });
    product.save()
    .then((post)=>{
        return res.status(200).send(post)
    })
    .catch((err)=>{
        return res.status(200).send(err.message)
    })
}]

