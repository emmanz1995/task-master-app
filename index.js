const express = require('express')
const app = express()
// const cors = require('cors')
const { PORT } = require('./src/utils/config')
const connect = require('./src/utils/db')
const taskRoutes = require('./src/routes/taskRoutes')
const path = require('path')

// app.get('/', (req, res) => {
//   res.send('<h1>TaskMaster App ;)</h1>')
// })

// app.use(cors())

app.use(express.json())
app.use('/api/tasks', taskRoutes)

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('./client/build'))
}

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
// })

connect()
app.listen(PORT, () => {
  console.log(`Listen on PORT: ${PORT}`)
})