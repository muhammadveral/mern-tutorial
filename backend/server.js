const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT ||5000

const app = express()

app.listen(port, ()=> console.log(`Server started on port ${port}`))
app.get('/api/goals', (req,res) => {

    res.status(200).json({message: 'Get Goals'})

})
app.use('/api/goals', require('./routes/goalRoutes'))

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.listen(port, ()=> console.log(`Server started on port ${port}`))