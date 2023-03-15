const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.status(200)
    res.json({status:'up'})
})

module.exports=router