const express = require('express')
const path = require('path')
const app = express()

// STATIC FILES
// const staticFolder = path.join(__dirname, 'views')
// const expressStatic = express.static(staticFolder)
// app.use(expressStatic)
app.use(express.static(path.join(__dirname, 'views')))

// PUBLIC FILES
// const publicFolder = path.join(__dirname, 'public')
// const expressPublic = express.static(publicFolder)
// app.use(expressPublic)
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('views/index')
})

app.get('/test', (req, res) => {
  res.send("It's working")
})

app.use((req, res) => {
  res.send('Page not Found')
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))
