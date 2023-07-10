const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    images:{
        type: Object
    },
    product_name:{
        type: String,
        trim: true,
        required: true
    },
    product_code:{
        type: Number,
        trim: true,
        required: true
    },
    product_barcode:{
        type: Number,
        trim: true
    },
    exp_day:{
        type: Number,
        trim: true,
        required: true
    },
    exp_month:{
        type: Number,
        trim: true,
        required: true
    },
    exp_year:{
        type: Number,
        trim: true,
        required: true
    },
    price:{
        type: Number,
        trim: true,
        required: true
    },
    stoc:{
        type: Number,
        default: 0
    },
    category:{
        type: String
    },
    product_listed_info:{
        type: Object,
        required: true
    },
    listed_date:{
        type: String,
        required: true
    },
    other:{
        type: Object
    }
    
},{
    timestamps:true
})

module.exports = mongoose.model("Products", productSchema)