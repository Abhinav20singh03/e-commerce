import userModel from "../models/userModel.js";
import validator from 'validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}



const loginUser =async (req,res)=>{
   try {
    const {email,password} = req.body;
    const user = await userModel.findOne({email});
    if(user==null){
        res.json({success:false,message:"user does not exists"})
    }

    const isMatch = await bcrypt.compare(password,user.password);
    if(isMatch==true){

        const token = createToken(user._id);
        res.json({success:true,token});
    }else{
        res.json({success:false,message:"Password incorrect"});
    }   
    

   } catch (error) {
      console.log(error.message);
      res.send(error.message);
   }
}


const registerUser = async (req,res)=>{
     try {
    const {name,email,password} = req.body;
    //check weatehr user exists or not
    if(await userModel.findOne({email})!=null){
        return res.json({success:false, message:"User exists"});
    }
    //validating
    if(!validator.isEmail(email)){
        return res.json({success:false, message:"Enter a valid email"});
    }
    //password length
    if(password.length < 8){
        return res.json({success:false, message:"Password must contain atleast 8 characters"});
    }
    // hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const newUser = new userModel({
        name,
        email,
        password:hashedPassword
    })

    const user = newUser.save();
    const token = createToken(user._id);
    res.json({success:true,token});

} catch (err) {
    console.log(err.message);
    res.json({success:false,message:err.message})
}

}


const adminLogin =async (req,res)=>{
 try {
    const {email,password} = req.body;
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
        const token = jwt.sign(email+password,process.env.JWT_SECRET);
        res.json({success:true,token});
    }else{
        res.json({success:false,message:"Invalid Credentials"});
    }
 } catch (error) {
    res.json({success:false,message:error.message});
 }
}

export {loginUser,adminLogin,registerUser}