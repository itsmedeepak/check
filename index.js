
var express = require('express')
var hbs = require('hbs')
var app = express()

app.set('view engine', 'hbs')


app.get('/', (req, res)=>{
    res.render('demo')
})
  
app.listen(3000)