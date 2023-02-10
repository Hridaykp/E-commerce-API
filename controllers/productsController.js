const Product = require('../models/product');


//getting all products
const getAllProducts = async(req, res) => {
    try{
        const products = await Product.find({});
        if(products.length < 1){
            res.status(200).json({
                msg: "No products found"
            });
            return;
        }
        if(products){
            res.status(200).json({
                data: products,
                msg: "these are products"
            });
        }
    } catch(error){
        res.status(404).json({
            msg: "Error in founding products"
        })
    }
}

//creating a new product
const createNewProduct = async(req, res) => {
    try{
        const product = await Product.create(req.body);
            res.status(201).json({
                data:{
                    product,
                    msg: "Created successfuly"
                }
            });
        console.log(product);
    } catch(error){
        res.status(404).json({
            data: {
               msg: "Error in creating a new product" 
            }
        })
    }
}


//deleting a product
const deleteProduct = async(req, res) => {
    try{
        const{ id:  productID } = req.params;
        const product  = await Product.findOneAndDelete({
            _id: productID
        })
        if(!product){
            return
        }
        res.status(200).send({
            data: {
                msg: `${product.name} deleted successfully`
            }
        })
    } catch(error){
        res.status(404).json({
            data: {
               msg: error 
            }
        })
    }
}


//for updating product-details
const updateProduct = async(req, res) => {
    const {name,price, Qty} = req.body;
    try{
        const product = await Product.findByIdAndUpdate(
            {_id: req.params.id},
            {name, Qty, price},
            {new: true}
        )
        console.log(product);
        res.status(200).json({
            data: {
                product: product,
                msg: "Updated Successfully"
            }
        })
    } catch(error){
        res.status(404).json({
            data: {
               msg: error 
            }
        })
    }
}

module.exports = {
    getAllProducts, createNewProduct, deleteProduct, updateProduct
}