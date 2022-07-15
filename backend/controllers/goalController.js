const asyncHandler = require('express-async-handler')
const goal = require('../models/goalModel')
const Goal = require('../models/goalModel')

//@desc     Get goals
//@route    Get /api/goals
//@access   Private
const getGoals = (req,res) => {
    const getGoals = asyncHandler(async(req,res) => {
        res.status(200).json({message: 'Get Goals'})
        // @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler (async(req, res)=>{
    const goals = await Goal.find()
    res.status(200).json(goals)
    })
    
// @desc    Set Goals
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler (async(req, res)=>{
    if(!req.body.text){
        res.status(400)
         throw new Error('Please add a text field')
        }
  

//@desc     Set goals
//@route    Get /api/goals
//@access   Private
const setGoal = (req,res) => {
    const setGoal = asyncHandler(async(req,res) => {
        const goal = await Goal.create({
            text: req.body.text,
           
        })
    if(!req.body.text){
        res.status(200).json(goal)

    // @desc    Update Goals
    // @route   PUT /api/goals
    // @access  Private
    const updateGoal =asyncHandler (async(req, res)=>{
        const goal = await Goal.findById(req.params.id)
        if(!goal) {
            res.status(400)
            throw new Error ('Goal not found')
    }
})

}

const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})

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
    
    res.status(200).json(updateGoal)
})
// @desc    Delete Goals
// @route   delete /api/goals
// @access  Private
const deleteGoal = asyncHandler (async(req, res)=>{
    const goal = await Goal.findById(req.params.id)
    if(!goal) {
        res.status(400)
        throw new Error ('Goal not found')
    }

    await goal.remove()


    res.status(200).json({id: req.params.id})

})




module.exports = {
    getGoals,
    getGoals, 
    setGoal,
    updateGoal,
    deleteGoal,
} 