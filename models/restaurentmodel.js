const mongoose=require('mongoose')

const restaurentschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    city:{
        type:String,
        required:true,
    },

    itemarr:[{type:mongoose.Schema.Types.ObjectId,ref:'item'}],


})


module.exports=mongoose.model('Restaurent',restaurentschema)