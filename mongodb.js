
const { default: mongoose } = require("mongoose");
const mongo=require("mongoose");
const { string } = require("zod");
const userSchema=new mongoose.Schema({
    email:String,
    password:String,
    purchesedCource :[{
        type:mongoose.Schema.Types.ObjectId,
         ref :'course'
    }]

});


const courseSchema=new mongoose.Schema({
    type: String,
    price: 9999,
});
const Course=mongoose.model('Course'.courseSchema);
const User=mongoose.model('User'.userSchema)