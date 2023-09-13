const path = require('path')
const express = require('express');
const app = express();
const cors = require('cors')
const router = new express();

// app.use(cors())
app.use('/toto', cors(), express.static(path.join(__dirname, '/')));

const port = 4000
app.listen(port);

console.log(`MAIN: Server listening on PORT http://localhost:${port}/toto`)
