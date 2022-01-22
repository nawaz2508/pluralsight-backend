const express = require("express")
const app = express()
const connect = require("./config/db")
app.use(express.static("./public"))
app.set("view engine" , "ejs")

app.get("/home", (req,res) => {
    res.render("home")
})
app.get("/product", (req,res) => {
    res.render("abProduct")
})

app.get("/subscription", (req,res) => {
    res.render("nSubscription")
})
app.get("/subscribe", (req,res) => {
    res.render("subscribe")
})

app.get("/order", (req,res) => {
    res.render("order")
})
app.get("/address" , (req,res) => {
    res.render("address")
})
app.get("/payment", (req,res) => {
    res.render("payment")
})

app.get("/confirm", (req,res) => {
    res.render("confirm")
})
app.listen(5000, async() =>{
    await connect()
    console.log("server running at port 5000")
})


