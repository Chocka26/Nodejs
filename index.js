const express = require("express")
const app = express()
app.use(express.json())


const UserRoutes = require("./routes/UserRoutes")
app.use(UserRoutes)

app.use(require("./routes/foodRoute"))

app.use(require("./routes/CustomerIdentifierRoute"))


//===================================

const mongoose = require("mongoose")
const MONGODB_URL = "mongodb://127.0.0.1:27017/foodhub26"

mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log(`${MONGODB_URL} connection Successfull...`)
    })
    .catch((err) => {
        console.error("Error in connecting to mongodb", err.message)
    })

//=====================================
app.get('/add', (req, res) => {
    res.send("user created")
})

app.listen(7000, () => {
    console.log("Server is running on 7000")
})