import express from 'express';
const router =express.Router();

router.get("/api/auth/signup",(req,res) =>{
    res.send("Sign Up endpoint");
})
router.get("/api/auth/login",(req,res) =>{
    res.send();
})
router.get("/api/auth/logout",(req,res) =>{
    res.send();
})

export default router;