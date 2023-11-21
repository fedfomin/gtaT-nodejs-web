const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

// Controllers
const indexRouter = require('./controllers/index')
const ladderIndex = require('./controllers/ladder')
const ladderGangsterRecent = require('./controllers/recent-respect')
const ladderGangsterTotal = require('./controllers/total-respect')
const ladderGangTotal = require('./controllers/total-gang-respect')
const ladderMoney = require('./controllers/money')
const ladderLevel = require('./controllers/level')
const ladderFrenzie = require('./controllers/frenzie')
const ladderRace = require('./controllers/race')
const ladderArena = require('./controllers/arena')
const ladderDuel = require('./controllers/duel')
const ladderDamage = require('./controllers/damage')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static(__dirname + '/public'))

// Routes
app.use('/',  indexRouter)
app.use('/ladder',  ladderIndex)
app.use('/ladder/recent-respect',  ladderGangsterRecent)
app.use('/ladder/total-respect',  ladderGangsterTotal)
app.use('/ladder/total-gang-respect',  ladderGangTotal)
app.use('/ladder/money',  ladderMoney)
app.use('/ladder/level',  ladderLevel)
app.use('/ladder/frenzie',  ladderFrenzie)
app.use('/ladder/race',  ladderRace)
app.use('/ladder/arena',  ladderArena)
app.use('/ladder/duel',  ladderDuel)
app.use('/ladder/damage',  ladderDamage)

app.listen(process.env.PORT || 3000)