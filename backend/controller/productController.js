import productModel from "../models/productModel.js";
import userModel from "../models/userModel.js";
import {v2 as cloudinary} from "cloudinary";

const addProducts = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
      date,
    } = req.body;


    const image = req.file;
    if (!image) {
      return res.status(400).json({ success: "false", message: "Image file is required" });
    }
    
    const result = await cloudinary.uploader.upload(image.path, {
      resource_type: 'image',
    });

    const imageURL = result.secure_url;
    console.log("Image uploaded to Cloudinary:", imageURL);

    // Save product to the database
    const product = await productModel.create({
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes : JSON.parse(sizes),
      bestseller,
      date:Date.now(),
      image: imageURL, 
    });

    console.log("Product created:", product);

    res.status(201).json({
      success: "true",
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    console.error("Error adding product:", error.message);
    res.status(500).json({
      success: "false",
      message: error.message,
    });
  }
};


const removeProducts = async (req, res) => {
  try {
    console.log("Received request body:", req.body); // Debugging line

    if (!req.body.id) {
      return res.json({ success: false, message: "Product ID is required" });
    }

    let product = await productModel.deleteOne({ _id: req.body.id });

    if (product.deletedCount === 0) {
      return res.json({ success: false, message: "No product found with the given ID" });
    }

    res.json({ success: true, message: "Product removed successfully", product });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const listProducts = async(req,res)=>{
  try {
    const products = await productModel.find({});
    console.log(products);
    res.json({success:"true",products});
  } catch (error) {
    res.json({success:"false",message:error.message});
  }
}

const singleProduct = async(req,res)=>{
  try {
    const {productId} = req.body;
    const product = await productModel.findById(productId);
    res.json({success:true,product});
  } catch (error) {
    res.json({success:false,message:error.message});
  }
}

export {addProducts,removeProducts,listProducts,singleProduct};