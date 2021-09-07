const express = require('express')
const app = express()
const port = process.env.PORT || 80 ;

app.get('/', (req, res) => {
    res.send('ok')
  })

app.get('/services/service-1', (req, res) => {
  res.send('This is a sample response from service 1 (Nodejs App Service) TARUN')
})
app.get('/services/service-1/status', (req, res) => {
    res.send('ok')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
