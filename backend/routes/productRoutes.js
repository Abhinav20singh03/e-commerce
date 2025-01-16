import express from "express";
import { addProducts,removeProducts,listProducts,singleProduct } from "../controller/productController.js";
import upload from "../middleware/multer.js";

const productRouter = express.Router();

productRouter.post("/add",upload.single('image'),addProducts);
productRouter.post("/remove",removeProducts);
productRouter.get("/list",listProducts);
productRouter.post("/single",singleProduct);

export default productRouter;