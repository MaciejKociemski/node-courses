const express = require('express');
const { Appearance } = require('react-native');
const app = express();



app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/contact',(req,res)=> {
    res.send('<h1>Contact page - z aplikacji myapp </h1>')
})

app.use((req, res, next) => {
  console.log("nasze oprogramowanie posredniczace - middleware");
  next();
});

app.listen(3000, () => {
    console.log('Example app listening port 3000')
})