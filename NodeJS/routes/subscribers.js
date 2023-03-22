const express = require('express')
const router = express.Router()

//getting all
router.get('',(req,res)=>{
    res.send('Hello World')
})

// getting one
router.get('/:id',(req,res)=>{
    req.params.id
})


// creating one
router.post('/', (req,res)=>{

})

// creating one
router.patch('/', (req,res)=>{

})
// delete one
router.delete('/:id', (req,res)=>{
    req.params.id
})
module.exports = router