const express=require('express');
const router=express.Router();
const fs = require("fs");
const bodyParser=require('body-parser');
module.exports = router;

const {Books}=require('../model/books.js');
//get all books from the database.

router.get('/books', (req, res)=>
{
    Books.find({},(err,data)=>
    {
        if(!err)
        {
            res.send(data);
        }
        else{
            console.log(err);
        }
    })
});




router.post('/books', (req, res)=>
{
    const book=new Books(
        {
            title:req.body.title,
            author:req.body.author,
            description:req.body.description,
            image:req.body.image
        }
    );
    book.save((data)=>
    {
        res.status(200).json({code:200,message:"New book added succesfuly",addBook:data})
    });
});


//edit details of the book
router.put('/books/:id', async(req, res)=>{
    try{
       const id = req.body._id;
       const details= await Books.findOneAndUpdate({id:req.body._id},   
        {"$set": {   
       title:req.body.title,
       author:req.body.author,
       description:req.body.description,
       image:req.body.image
    }} )

    if(!details){
       return res.status(200).send({
         status: 404,
         message: 'No data find'
       })
    }
    res.status(200).send({
       status: 200,
       message: 'Data Update Successfully'
    })
    }
    catch(error){
       console.log(error)
       return res.status(400).send({
         message:'Unable to update data',
         errors: error,
         status: 400
       })
    }
    });


    //deleting selected book
router.delete('/books/:id', (req, res) => 
{
Books.findByIdAndRemove(req.params.id)
    .then(result => {
   

            res.status(200).json({code:200,message:"Books Deleted succesfuly"})
       res.json('Success')
     })
    .catch(error => console.error(error))
    });


    module.exports=router;