const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
// @desc    Register user
// @route   POST /api/users
// @access  Public
const registerUser = (req, res) =>{
    const registerUser = asyncHandler(async(req, res) =>{

        const { name, email, password } = req.body
        if(!name || !email || !password){
            res.status(400)
            throw Error('Please add all fields')
        }
    
        //check if user exist
        const userExists = await User.findOne({email})
    
        if(userExists){
            res.status(400)
            throw Error('User already exists')
        }
    
    res.json({message: "Register User"})
}
})
// @desc    Login user
// @route   POST /api/users
// @access  Public
const loginUser = (req, res) =>{
    const loginUser = asyncHandler(async(req, res) =>{
    res.json({message: "Login User"})
}
})
// @desc    Get user data
// @route   POST /api/users
// @access  Public
const getMe = (req, res) =>{
    const getMe = asyncHandler(async(req, res) =>{
    res.json({message: "User data display"})
}
})


module.exports = {
    registerUser,
    loginUser,
    getMe

} 