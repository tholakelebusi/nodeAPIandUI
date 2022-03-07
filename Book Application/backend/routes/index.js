const express=require('express');
const router=express.Router();
const fs = require("fs");
const bodyParser=require('body-parser');
var formidable = require('formidable');
module.exports = router;
const multer = require("multer");
const upload = require('../model/picture');
const Resize = require('../resize');
const {Books}=require('../model/books.js');
//get all books from the database.

router.get('/', async function (req, res) {
    await res.render('index');
  });
  
  router.post('/post', upload.single('image'), async function (req, res) {
    const imagePath = path.join(__dirname, '/public/images');
    const fileUpload = new Resize(imagePath);
    if (!req.file) {
      res.status(401).json({error: 'Please provide an image'});
    }
    const filename = await fileUpload.save(req.file.buffer);
    return res.status(200).json({ image: filename });
  });


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
router.put('/books/:id',(req, res)=>
{
    Books.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err,) {
        if (err) return next(err);
        res.send('Book udpated.');
    });
    
})





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

//get 1 item using id
router.get('/books/:id', (req, res)=>
{
    Books.findById(req.params.id,(err,data)=>
        {
        if(!err)
        {
            res.send(data);
        }
        else{
            console.log(err);
        }
    });
});
    module.exports=router;