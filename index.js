const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;




app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname+'/html', '/index.html'));
});

app.get('/utkarsh',(req, res)=>{
    res.sendFile(path.join(__dirname+'/html', '/utkarsh.html'));
});

app.get('/prakhar',(req, res)=>{
    res.sendFile(path.join(__dirname+'/html', '/prakhar.html'));
});

app.get('/anant',(req, res)=>{
    res.sendFile(path.join(__dirname+'/html', '/anant.html'));
});



app.listen(port);
