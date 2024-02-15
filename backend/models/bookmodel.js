const mongoose=require('mongoose');
const booksmodel= new mongoose.Schema({
    name:{
        type:String,
        require
    },
    author:{
        type:String,
        require
    },
    year:{
        type:Number,
        require
    }
});
module.exports =mongoose.model("books",booksmodel);