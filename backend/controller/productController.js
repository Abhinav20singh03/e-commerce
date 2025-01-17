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


const removeProducts = async(req,res)=>{
  try {
    let product = await productModel.findByIdAndDelete(req.body.id);
    res.json({success:true,message:"Product removed",product});
  } catch (error) {
    res.json({success:false,message:error.message});
  }
}

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