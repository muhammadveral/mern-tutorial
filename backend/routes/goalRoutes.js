const express = require('express')
const router = express.Router()

const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')
const { 
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal 
} = require('../controllers/goalController')
router.get('/', (req,res)=>{
    res.status(200).json({message : 'Get Goals'})
})
router.get('/', getGoals)
router.route('/').get(getGoals).post(setGoal)


router.post('/', (req,res)=>{
    res.status(200).json({message : 'Set Goals'})
})
router.post('/', setGoal)

router.put('/:id', updateGoal)
router.put('/:id', (req,res)=>{
    res.status(200).json({message : 'Update Goal ${req.params.id}'})
})


router.delete('/:id', (req,res)=>{
    res.status(200).json({message : 'Delete Goal ${req.params.id}'})
})
router.delete('/:id', deleteGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router 