
const express= require("express");
const router=express.Router();
const User=require("../../models/user")
// const jwt=require('jsonwebtoken')
// const keys=require("../../config/keys")
// const passport=require('passport')


router.post("/register",(req,res)=>{
    User.findOne({email:req.body.email})
    .then((user)=>{
        if(user){
            res.status(400).json({email:"邮箱已注册"})
        }else{
            const newUser= new User(
                {
                    email:req.body.email,
                    name: req.body.name,
                    password:req.body.password
                }
            )
            newUser.save()
            
            .then(user=>{res.json(user)})
            .catch(error=>console.log(error))
        }
    })
})
router.post("/login",(req,res)=>{
    User.findOne({
        email:req.body.email,
        password:req.body.password
    })
    .then((user)=>{
        if(!user){
          res.status(400).json({email:"账号或密码错误"})
        } else{
            // const rule={id:user.id,name:user.name};
            // jwt.sign(rule,keys.secretOrkey,{expiresIn:3600},(err,token)=>{
            //     // if(err) throw err;
            //     res.json({
            //         success:true,
            //         token:"mrwu"+token
            //     })
            // })
        token=req.session.user=user
       
        
        res.json(user)
        }
    })
    
    // router.get('/current',passport.authenticate("jwt",{session:false}),(req,res)=>{
    //     res.json( {message:'哈哈哈哈'})
    // })
})
module.exports=router;