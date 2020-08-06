const express = require('express')
const app = express ()


const port = 3000

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const indexRouter = require('./routes/index')

app.use('/', indexRouter)

app.listen(()=>{
    console.log(`running at port ${port}`)
})

