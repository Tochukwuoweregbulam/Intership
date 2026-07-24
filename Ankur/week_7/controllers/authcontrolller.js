

import user from '../models/user.js';
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


// register user
const registerUser = async(req,res) =>{
    try{
        //extract user information from our request body
        const{username, email, password} = req.body
        

        const checkExistingUser = await user.findOne({$or: [username]})
        if(checkExistingUser){
            return res.status(400).json({
                success: false,
                message: "Username already taken"
            })
        }
    const salt  = await brcypt.genSalt(8)
    const hashedpassword= await brcypt.hash(password,salt)

    const newlyCeatedUser = new  user({
       username,
       email,
       password: hashedpassword
    });
    await newlyCeatedUser.save();
    if(newlyCeatedUser){
         res.status(201).json({
                success: true,
                message: "successful registered"
         })

    }
    else{
         res.status(400).json({
                success: false,
                message: "unable to register user, try again"
            });
        }
    
    }catch(error){
        console.log(error);
        res.status(500).json({
         success: false,
         message: 'site is unavailable, try again later'
        })
    }
}

// login user
const loginUser= async(req,res)=>{
    try{ 
      const{username,password} = res.body;
      const user = await user.findOne({username});
      if(!user){
        return res.status(400).json({
            success: false,
            message: "invalid credentials"
        })

      }
      
      bearer 
      const  isPasswordMatch = await bcrypt.compare(password,user.password)
          if(!user){
        return res.status(400).json({
            success: false,
            message: "invalid credentials"
        })
         }
        
       const accessToken = jwt.sign({
          userid: user.userid,
          username: user.username,

             }, process.env.JWT_SECRET_KEY,{
                expiresIn: '1h'
             })
             res.status(200).json({
                success: true,
                message: "logged in successful",
                accessToken
             
            })



    }catch(error){
        console.log(error);
        res.status(500).json({
         success: false,
         message: 'site is unavailable, try again later'
        })
    }
}
export {
    registerUser, loginUser
}