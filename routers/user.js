const express = require("express");
const router=express.Router();
const User=require("../models/user");

router.get('/',async(req,res)=>{
    try{
        const user=await User.find()
        res.json(user);

    }catch(err){
        res.send("error "+err);
    }
})

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.send("error " + err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.sub=req.body.sub
    const a1 = await user.save();
    res.json(a1)
  } catch (err) {
    res.send("error " + err);

  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if(user){
        await user.remove();
        res.json("Succesfully deleted")
    }else{
        res.json({"error": " Not found user"})
    }
    
    
  } catch (err) {
    res.send("error " + err);
  }
});



router.post('/',async(req,res)=>{
    const user=new User({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try{
        const a1=await user.save()
        res.json(a1)
    }catch(err){
        res.send(err)
    }

})

module.exports=router;