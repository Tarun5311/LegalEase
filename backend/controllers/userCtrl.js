const userModel = require('../models/userModel')
const bcrypt = require('bcryptjs')

const loginController = () => {}
const registerController = async (req, res) => {
    try{
        const existingUser = await userModel.findOne({email:req.body.email})
        if(existingUser){
            res.status(200).send({message:'User Already exists', succes:false})
        }

        const password = req.bosy.password
        const salt = await bcrypt.genSalt(10)
        const hashedPasssword = await bcrypt.hash(password, salt)
        req.body.password = hashedPasssword
        const newUser = new userModel(req.body)
        await newUser.save()
        res.save(201).send({message: 'Registered Successfully', success:true})
    } catch(error) {
        console.log( error)
        res.status(500).send({success:false, message: `register Controller ${error.message}`})
    }
}

module.exports = {loginController, registerController};