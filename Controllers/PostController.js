const Post = require("../Models/PostModel")
const Comment = require("../Models/CommentModel");
const Tag =require("../Models/TagModel")

const { findByIdAndUpdate } = require("../Models/CustomerModels");
exports.insert = [(req,res)=>{
    const post = new Post({

        title: req.body.title,
        author: req.body.author,
        
    });
    post.save()
    .then((post)=>{
        return res.status(200).send(post)
    })
    .catch((err)=>{
        return res.status(200).send(err.message)
    })
}]

exports.insertwithImages = [(req,res)=>{
    const post = new Post({
        title: req.body.title,
        author: req.body.author,
        images: req.body.images
        
    });
    post.save()
    .then((post)=>{
        return res.status(200).send(post)
    })
    .catch((err)=>{
        return res.status(200).send(err.message)
    })
}]

exports.list = [(req,res)=>{
    Post.find().populate("tags")
    .then((posts)=>{
        return res.status(200).send(posts)
    })
    .catch((err)=>{
        return res.status(200).send(err.message)
    })
}]

exports.addcomment = [(req,res)=>{
    const comment = new Comment ({
        username : req.body.comment.username,
        text: req.body.comment.text,
        CreatedAt: Date.now()

    })
    comment.save()
    .then((comment)=>{
        Post.findByIdAndUpdate(req.body.postId,{
            $push:{
                comments: comment._id
            }
        },
        {
            new : true, useFindAndModify: false
        })
        .then((post)=>{
            return res.status(200).send(post)
        })
        .catch((err)=>{
            return res.status(200).send(err.message)
        })
    })
    .catch((err)=>{
        res.status(200).send(err.message)
    })    
}]

exports.tag = [(req,res)=>{
    const tag = new Tag ({
        name : req.body.tag.username,
        slug: req.body.tag.slug,
        CreatedAt: Date.now()

    })
    tag.save()
    .then((tag)=>{
        Post.findByIdAndUpdate(req.body.postId,{
            $push:{
                tags: tag._id
            }
        },
        {
            new : true, useFindAndModify: false
        })
        .then((post)=>{
            return res.status(200).send(post)
        })
        .catch((err)=>{
            return res.status(200).send(err.message)
        })
    })
    .catch((err)=>{
        res.status(200).send(err.message)
    })    
}]

