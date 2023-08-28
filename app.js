const express = require('express');
const app = express();
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.redirect('/cashier1');
});

app.get('/cashier1',(req,res)=>{
    res.sendFile('./views/cashier1.html',{root:__dirname});
});

app.get('/cashier2',(req,res)=>{
    res.sendFile('./views/cashier2.html',{root:__dirname});
});

app.get('/cashier3',(req,res)=>{
    res.sendFile('./views/cashier3.html',{root:__dirname});
});

app.use((req,res)=>{
    res.status(404).send('<h1>Bad URL</h1>');
});
app.listen(3000);
