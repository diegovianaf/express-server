const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Express | Home'
  })
})

app.get('/posts', (req, res) => {
  res.render('posts', {
    title: 'Express | Posts',
    posts: [
      {
        title: 'Tech News',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil velit impedit dolorum molestiae officia rem adipisci suscipit ea assumenda ullam! Exercitationem fugit molestiae eligendi commodi velit doloribus! Tempore, nostrum ea.'
      },
      {
        title: 'Creating a Server with Node.js',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde velit odio neque, debitis possimus voluptatum quo sequi aperiam harum repellat laborum pariatur reprehenderit accusamus.'
      },
      {
        title: 'How to Become a Frontend Developer?',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, sapiente. Ullam neque aliquam dolor libero officiis consectetur corporis in natus atque cumque voluptate asperiores, debitis ex, incidunt quas.'
      }
    ]
  })
})

app.use((req, res) => {
  res.send('Page not Found')
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))
