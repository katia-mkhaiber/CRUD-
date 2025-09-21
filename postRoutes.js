const express=require("express");
const router=express.Router();
const Post=require("../models/Post");


router.post("/",async(req,res)=>{
    try{
        const post=new Post({
            title:req.body.title,
            content:req.body.content
        });
        await post.save();
        res.status(201).json(post);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});
router.get("/",async(req,res)=>{
    const posts=await
    Post.find();
    res.json(posts);
});
router.get("/:id",async(req,res)=>{
    try{
    const post=await
    Post.findById(req.params.id);
    if(!post) return
    res.status(404).json({msg:"Post not found"});
    res.json(post);
} catch(error){
    res.status(500).json({message:err.message});
}
});
router.put("/:id",async(req,res)=>{
    try{
    const post=await
    Post.findByIdAndUpdate(req.params.id, {title:req.body.title, content:req.body.content},
       { new:true}
);
if(!post) return
res.status(404).json({message:"Post not found"});
res.json(post);
}catch(error){
    res.status(500).json({message:err.message});
}
});
router.delete("/:id",async(req,res)=>{
    try{
    const post=await 
    Post.findByIdAndDelete(req.params.id);
    if(!post) return
    res.status(404).json({message:"Post not found"});
    }catch(error){
        res.status(500).json({message:err.message});
    }
});
module.exports=router;