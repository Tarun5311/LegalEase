const mongoose = require('mongoose')
const colors = require('colors')


const connectDB = async() => {
    try{
        await mongoose.connect(process.env.mongoUrl)
        console.log(`MongoDb connected ${mongoose.connection.host}`)
    } catch (error){
        console.log(`MongoDb Server Issue ${error}`)
    }
}

module.exports = connectDB; 