import express from "express";
import { addProducts,removeProducts,listProducts,singleProduct } from "../controller/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

productRouter.post("/add",adminAuth,upload.single('image'),addProducts);
productRouter.post("/remove",adminAuth,removeProducts);
productRouter.get("/list",listProducts);
productRouter.post("/single",singleProduct);

export default productRouter;