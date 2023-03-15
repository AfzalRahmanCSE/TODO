const todos=[{id:1,name:'Do coding',completed:'active'},{id:2,name:'create a model',completed:'active'}]

const getAll=(req,res)=>{
    res.status(200)
    res.send(todos);
}

module.exports={
    getAll,
}