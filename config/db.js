const mongoose = require("mongoose")

const connect = () =>{
    console.log("db connected")
    mongoose.connect("mongodb://127.0.0.1:27017/plural")
}
module.exports = connect