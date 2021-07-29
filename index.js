const express = require('express')
const usersRouter = require('./routes/users')

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())

app.get('/', (req, res) => res.send('default route'))
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log('app is listening on:', port)
})