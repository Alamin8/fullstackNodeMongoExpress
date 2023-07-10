const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    stuff_id:{
        type:Number,
        required: true,
        unique: true
    },
    name:{
        type:String,
        required: true,
        trim: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    mobile:{
        type:Number,
        required: true,
        unique: true
    },
    role:{
        type:Number,
        default: 0
    },
    member_status:{
        type:Number,
        default: 0
    },
    avater:{
        type: Object
    },
    dob:{
        type: String,
        default: ""
    },
    joining_date:{
        type: String,
        default:""
    }
}, {
    timestamps: true
})

module.exports=mongoose.model('Users', userSchema)