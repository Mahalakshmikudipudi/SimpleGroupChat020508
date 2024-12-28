const express=require('express');
const bodyParser=require('body-parser'); 
const fs=require('fs');

const app=express();

const adminRoutes=require('./routes/admin');
const chatRoutes=require('./routes/chat');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(chatRoutes);

app.use('/', (req, res, next) => {
    res.status().send(`<h1>Page not found</h1>`)
})

app.listen(5000);