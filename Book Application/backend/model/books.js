const mongoose = require('mongoose');


//Creating the structure of database.

const Books=mongoose.model('Books',{

    title:
    { type:String,
    required:true
    },
   author:
   {type:String,
   required:true
   },
    description:
    {type:String,
        required:true},
    image:
    {type:String,
        required:true}
   
    }
);
 
module.exports = {Books};