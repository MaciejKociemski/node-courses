const { response } = require('express');
const express = require('express')
const PORT = 4000;
const app = express();

app.get('./', (req, res) => {
    response.send('<h1>Hello</h1>')
})
app.use((req, res, next)=> {
    console.log(`Endpoint: ${req.url}`);
    next();
})

app.listen(PORT, () => {
    console.log(`Aplikacja jest uruchomiona i nasluchuje jest na porcie ${PORT}`);
});
