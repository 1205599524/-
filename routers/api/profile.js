const express= require("express");
const router=express.Router();
const profiles=require("../../models/profiles")
router.get("/test",(req,res)=>{
    res.json({msg:"profile,works"})
})
router.post("/add",(req,res)=>{
    const newprofiles={
        type:req.body.type,
        describe:req.body.describe,
        incode:req.body.incode,
        expend:req.body.expend,
        cash:req.body.cash,
        remark:req.body.remark
    }
    var add=new profiles(newprofiles).save()
    .then(add=>res.json(add))
})
router.get("/index/fund",(req,res)=>{
    profiles.find({})
    .then(profiles=>{
        if(!profiles){
            res.status(404).json({err:"NOT FIND"})
        }else{
            res.status(200).json(profiles)
        }
    })
})
router.get("/find:id",(req,res)=>{
    profiles.findOne({_id:req.params.id})
    .then(profiles=>{
        if(!profiles){
            res.status(404).json({err:"NOT FIND this id"})
        }else{
            res.json(profiles)
        }
    })
})
router.post("/edit:id",(req,res)=>{
    const newprofiles={
        type:req.body.type,
        describe:req.body.describe,
        incode:req.body.incode,
        expend:req.body.expend,
        cash:req.body.cash,
        remark:req.body.remark
    }
    profiles.findOneAndUpdate(
        {
            _id:req.params.id
        },
        {
            $set:newprofiles
        },
        {
            new:true
        }
    )
    .then(prifiles=>{
        res.json(prifiles)
    })
    .catch(err=>{
        res.status(404).json(err)
    })
})
router.delete("/delete:id",(req,res)=>{
    profiles.findOneAndRemove({
        _id:req.params.id
    })
    .then(profile=>{
        profile.save().then(profile=>{res.json(profile)})
    })
    .catch(err=>{
        res.status(404).json(err)
    })
})
module.exports=router;