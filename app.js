const express = require('express')
const app = express()

app.use(express.static('public'))

// prints hello world as response
// app.get('/', (req, res) => res.send('Hello World!'))

// routes to hello.html in public directory
app.get('/', (req, res) => res.sendFile('hello.html', {root: 'public'}))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
