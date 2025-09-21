import express from 'express';
const router =express.Router();


router.get("/api/auth/signup",(req,res) =>{
    res.send("Sign Up endpoint");
});