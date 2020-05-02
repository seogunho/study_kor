const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://GunHo:qwerty0501@mongodb-mqhxx.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex: true, useFindAndModify : false
}).then(() => console.log('MongoDB connect....')).catch(err => console.error("33333"))

app.get('/', (req, res) => res.send('Hello World! 하이!!!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))