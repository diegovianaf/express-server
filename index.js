const express = require('express')
const res = require('express/lib/response')
const app = express()

app.get('/', (req, res) => {
  res.send('Hallo Leute')
})

app.get('/test', (req, res) => {
  res.send("It's working")
})

app.use((req, res) => {
  res.send('Page not Found')
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))
