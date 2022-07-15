


//@desc     Get goals
//@route    Get /api/goals
//@access   Private
const getGoals = (req,res) => {
    res.status(200).json({message: 'Get Goals'})
}

//@desc     Set goals
//@route    Get /api/goals
//@access   Private
const setGoal = (req,res) => {
    res.status(200).json({message: 'Set Goals'})
}
//@desc     update goals
//@route    Get /api/goals/:id
//@access   Private
const updateGoal = (req,res) => {
    res.status(200).json({message : 'Update Goal ${req.params.id}'})
}
//@desc     Get goals
//@route     Get /api/goals/:id
//@access   Private
const deleteGoal = (req,res) => {
    res.status(200).json({message : 'Delete Goal ${req.params.id}'})
}




module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
} 