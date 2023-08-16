const path = require('path')
const express = require('express');
const app = express();
const cors = require('cors')
const router = new express();
// app.use(cors())
console.log('PATH', path.join(__dirname, '/server-main'))
app.use('/', cors(), express.static(path.join(__dirname, '/')));

const port = 4000
app.listen(port);

console.log(`MAIN: Server listening on PORT http://localhost:${port}`)
