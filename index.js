const express = require('express')
const app = express()
const port = 5335

app.get('/', (req, res) =>
  res.send('Greetings from WoWDocker')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
