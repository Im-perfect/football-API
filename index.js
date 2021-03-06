const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
app.use(jsonParser)

// const db = require('./db.js')

// const Team = require('./team/model')

const routerTeam = require('./team/router')

app.use(routerTeam)

app.listen(port, ()=>console.log('Listening on ' + port))