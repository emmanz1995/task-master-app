const express = require('express')
const app = express()
const cors = require('cors')
const { PORT } = require('./utils/config')
const connect = require('./utils/db')
const taskRoutes = require('./routes/taskRoutes')
const path = require('path')

// app.get('/', (req, res) => {
//   res.send('<h1>TaskMaster App ;)</h1>')
// })

app.use(cors())

app.use(express.json())

app.use(express.static(path.resolve(__dirname, '../client/build')))

app.use('/api/tasks', taskRoutes)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

connect()
app.listen(PORT, () => {
  console.log(`Listen on PORT: ${PORT}`)
})