const path = require('path')
const express = require('express');
const app = express();
const cors = require('cors')
const router = new express();
// app.use(cors())
app.use('/', cors(), express.static(path.join(__dirname, '/build')));

app.use('/api', cors(), router.get('/test', (req, res) => {
  console.log('test')
  return res.json({ test: 'ok' })
}));

const port = 5005
var server = app.listen(port);

console.log(`Server listening on PORT http://localhost:${port}`)
