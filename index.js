
module.exports = require('./src/app')
// const app = require('express')
// const port =3000
// const services = require('./src/services/UserService')

// // function handleRequest(req, res, next) {
// //     res.send(`<h1>Request from ${req.method} to ${req.originalUrl}</h1> ${JSON.stringify(req.params.name)}`)
// // }
// function handleReq(req, res, next) {
//     res.send(`<h1>Request from ${req.method} to ${req.originalUrl} category : ${JSON.stringify(req.params.category)} author : ${JSON.stringify(req.params.author)}</h1>`)
// }

// function handleName(req,res,next) {
//     res.send(`<h1>Request from ${req.method} to ${req.originalUrl} ${JSON.stringify(req.params.name)}</h1>`)
// }

// function trains(req,res,next) {
//     res.send(`<h1>Request from ${req.method} to ${req.originalUrl} from : ${JSON.stringify(req.query.from)} to : ${JSON.stringify(req.query.to)}`)
// }

// function getUsers(req, res, next) {
//     res.send(`<h1>Request from ${req.method} to ${req.originalUrl} ${JSON.stringify(req.params.id)}</h1>`)
// }

// function getGender(req, res, next) {
//     res.send(`<h1>Request from ${req.method} to ${req.originalUrl} ${JSON.stringify(req.params.gender)}</h1>`)

  
// }

// app.get('/', handleReq)
// app.get('/hello',handleReq)
// app.get('/hellhtml', handleReq)
// app.post('/hello', handleReq)
// app.post('/hello/:name', handleReq)
// //handleName
// app.get('/username/:name', handleName)

// //handleReq
// app.get('/category/:category/author/:author', handleReq) 

// //trains
// app.get(`/train/routes?`, trains)

// //id
// app.get('/users/:id(\\d+)', getUsers)

// //gender
// app.get('/users/gender/:gender(female||male)', getGender)


// app.put('/hello', handleReq)
// app.patch('/hello', handleReq)
// // app.get('/users/:name', handleReq)
// app.use((req, res, next)=>res.send('Not found'))


// app.listen(port,()=> console.log(`listening in at http:// ${port}`)
// )