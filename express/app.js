
const express = require("express");
const app = express();

const myRouter=require('./router')

app.use('/api',myRouter)

app.all('/todos', (req, res, next) => {
    console.log('todos')
    next()
})

app.get('/todos', (req, res, next) => {
    res.send('todos!')
})
app.use(express.json())

app.use((request, response, next) => {
  console.log("hej hej middlware");
  next();
});

// app.get("/", (request, response) => {
//   response.send("hej hej witamy witamy");
// });

// // app.get("/user/*", (request, response, next) => {
// //     console.log((request.params)
// //      );
// //   response.send("hej User");
// // });

// app.get("./user/:userId", (request, response) => {
//     // response.send(`Hej, 
//     // ${request.params.userId}.
//     // Skip: ${request.query.skip},
//     // limit:${request.query.limit}`);

//     response.send({
//         userId: request.params.userId,
//         skip: request.query.skip,
//         limit:request.query.limit
//     })
// });
// app.post('/user/:userId', (req, res) => {
//     // console.log(req)
//     res.send(req.body)
// })

app.listen(3000, () => {
  console.log("Start aplikacji na porcie 3000 ");
});

// app.METHOD(PATH, HANDLER)
