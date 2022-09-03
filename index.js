const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')

// not necessary when we use ejs
// app.use(express.static(path.join(__dirname, 'views')))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/test', (req, res) => {
  res.send("It's working")
})

app.use((req, res) => {
  res.send('Page not Found')
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))
