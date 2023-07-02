const express = require('express')
const User = require('../models/UserModel')
const bcrypt = require('bcrypt')


const app = express.Router();

const salt = bcrypt.genSaltSync(8);
const secret = 'dhsgfwrguewrfwbfwefh789'

app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    try{
        const userDetails = await User.findOne({username})
        const succesfulAuth = bcrypt.compareSync(password, userDetails.password)
        if(succesfulAuth){
            res.status(200).send(userDetails)
        }
        else{
            res.status(400).send("Login failed")
        }
    }
    catch (error){
        res.status(400).json(error)
    }
})

app.post('/register', async (req, res) => {
    const {username, password} = req.body
    try{
        const newUser = new User({
            username,
            password: bcrypt.hashSync(password,salt)
        })

        await newUser.save()
    
        res.status(200).send(newUser)
    }
    catch (error){
        res.status(400).json(error)
    }
})

app.post('/update', async (req, res) => {
    try{
        await User.findByIdAndUpdate({_id : req.body._id}, req.body)
        const user_update = await User.findOne({_id: req.body._id})
        res.status(200).send(user_update)
    }
    catch (error){
        res.status(400).json(error)
    }
})

module.exports = app;