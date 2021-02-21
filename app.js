const express = require('express');

const app = express();

app.use(express.static('public'));


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/logreg', (req,res)=>{
    res.sendFile(__dirname + '/views/logreg.html');
});

app.get('/carrito', (req,res)=>{
    res.sendFile(__dirname + '/views/carrito.html');
});

app.get('/footer', (req,res)=>{
    res.sendFile(__dirname + '/views/footer.html');
});

const PORT = 4000;

app.listen(PORT, () => {
   console.log('Server is running on PORT: 4000');
});