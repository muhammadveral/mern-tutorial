const asyncHandler = require('express-async-handler')
const goal = require('../models/goalModel')

//@desc     Get goals
//@route    Get /api/goals
//@access   Private
const getGoals = (req,res) => {
    const getGoals = asyncHandler(async(req,res) => {
        res.status(200).json({message: 'Get Goals'})
    })
    }
  

//@desc     Set goals
//@route    Get /api/goals
//@access   Private
const setGoal = (req,res) => {
    const setGoal = asyncHandler(async(req,res) => {
    if(!req.body.text){
        res.status(400).json({message: 'Please add a text field'})
    }
})

}
//@desc     update goals
//@route    Get /api/goals/:id
//@access   Private
const updateGoal = (req,res) => {
    const updateGoal = asyncHandler(async(req,res) => {
    res.status(200).json({message : 'Update Goal ${req.params.id}'})
})
}

//@desc     Get goals
//@route     Get /api/goals/:id
//@access   Private
const deleteGoal = (req,res) => {
    const deleteGoal = asyncHandler(async(req,res) => {
    res.status(200).json({message : 'Delete Goal ${req.params.id}'})
})
}




module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
} 