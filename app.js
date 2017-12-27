const express = require('express')
const app = express()

app.use(express.static('public'))

// app.get('/', (req, res) => res.send('Hello World!'))

app.get('/', (req, res) => res.sendFile('hello.html', {root: 'public'}))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.post('/', function(req, res){
  res.send('got a POST request');
})

app.put('/user', function(req, res){
  res.send('got a PUT request at /user');
})