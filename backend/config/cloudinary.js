import {v2 as cloudinary} from "cloudinary"

const connectCloudinary = async ()=>{

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key : process.send.CLOUDINARY_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY
    })

}
export default connectCloudinary ;