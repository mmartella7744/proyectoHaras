const express = require('express');
const app = express();
app.use(express.static('public'));


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/logreg', (req,res)=>{
    res.sendFile(__dirname + '/views/logreg.html');
});

app.get('/footer', (req,res)=>{
    res.sendFile(__dirname + '/views/footer.html');
});

app.listen(process.env.PORT || 4000, ()=>{
    console.log('Servidor funcionando');
});