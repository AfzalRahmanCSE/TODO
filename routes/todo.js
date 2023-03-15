const express=require('express')
const router=express.Router()
const {getAll}=require('./../controllers/todo')

router.get('/',getAll)


module.exports=router;