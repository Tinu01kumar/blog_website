//why we use this model beacuse when we fetch data form the fronted and if ther is only username data and no passowrd data so to validatae we make a one model or schmea to validatae the request data 


import mongoose from "mongoose"
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    
    password:{
        type:String,
        required:true
    }

})

const user=mongoose.model('user',userSchema);
export default user;
