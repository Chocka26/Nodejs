// var http =require('http');
// var lib = require('./mylib')

// lib.calc(100,200)

// //create a server object:
// http.createServer(function(req, res){
//     res.write('Hello chocka!');
//     res.end();
// }) .listen(9090); //the server object listens on poprt 8080n

const express = require('express')

const app = express()

const router = express.Router()
router.get("/myPost",(req,res,next)=>{
    res.send("Sucess")
})
app.use(router)

const User = require("./routes/UserRoute")
app.use(User)


app.get("/", (req,res)=>{
    res.send("Harvey Specter best finisher")
})

app.use("/static", express.static(__dirname + "/Public"))

app.get("/hello", (req,res)=>{
    console.log(__dirname)
    res.status(200)
    res.set("Content-Type","application/json")
    res.set("x-mycookie","12345")
    let data= {
        username: "chocka",
        password: "pass@1234"
    }
    // res.send("Hello Chocka")
    res.send(data)
})

app.get("/login", (req,res)=>{
    const username =req.query["username"]
    const password = req.query["password"]
    console.log(username+" "+password)
    res.send("Received")
})

app.use(express.json())
app.use(express.urlencoded())
app.post("/login",(req,res)=>{
    const username = req.body["username"]
    const password = req.body["password"]
    console.log(username+" "+password)
    if(username === 'chocka' && password === '1234'){
        res.send("Login success")
    }
   else{
    res.send("Login failed")
   }
})



const posts =[
    {
        title: "Another Post",
        author:"Another author",
        createdAt: Date.now()
    },
    {
        title: "chocka",
        author:"Rajadurai",
        createdAt: Date.now()
    }
]

app.get("/post/:id",(req,res)=>{
    console.log(req.params["id"])
    res.send(posts[req.params["id"]])
})

app.listen(5000,()=>{
    console.log("Server is running on 5000")
})