const express=require('express');
const fs=require('fs');


const router=express.Router();

router.get('/login', (req, res, next) => {
    
        res.send(`<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" 
                action="/admin/login" method="POST">
                    <input id="username" type="text" name="username">
                    <button type="submit">Login</button>
                    </form>`)
    
})

router.post('/login', (req, res, next) => {
    const { username } = req.body;
    res.redirect('/');
    
})

module.exports=router;

