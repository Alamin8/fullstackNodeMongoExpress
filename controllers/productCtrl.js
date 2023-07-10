const Products = require('../models/productModel')

const productCtrl ={
    getProducts: async (req, res)=>{
        try{
            const products = await Products.find()
            res.json({products})
        }
        catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    createProduct: async (req, res)=>{
        try{
            const {images, product_name, product_code, product_barcode, exp_day, exp_month, exp_year, price, stoc, category, product_listed_info, listed_date, other} = req.body;

            if(!product_name || !product_code || !exp_day || !exp_month || !exp_year || !product_listed_info || !listed_date)
                return res.status(400).json({msg: "Fill all the require fields"})
            
            const newProduct = new Products({
                images, product_name, product_code, product_barcode, exp_day, exp_month, exp_year, price, stoc, category, product_listed_info, listed_date
            })

            await newProduct.save()
            res.json({msg:"Created a new product"})
        }
        catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    deleteProduct: async (req, res)=>{
        try{
            await Products.findByIdAndDelete(req.params.id)
            res.json({msg:"Deleted a Product"})
        }
        catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    updateProduct: async (req, res)=>{
        try{
            const {images, product_name, product_code, exp_day, exp_month, exp_year, price, stoc, category, product_listed_info, listed_date} = req.body;
            

            await Products.findByIdAndUpdate({_id:req.params.id}, {
                images, product_name, product_code, exp_day, exp_month, exp_year, price, stoc, category, product_listed_info, listed_date
            })

            res.json({msg: "Updated a product"})
        }
        catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
}

module.exports = productCtrl