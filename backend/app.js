const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })


const web = require('./routes/web')
const connectdb = require('./db/connectdb')
app.use(cors())

// for datget in api
app.use(express.json())
app.use('/api',web)

connectdb()
// route load//


app.use('/api', web)
//localhiost:4000/api

//server create//
app.listen(process.env.PORT, () => {
    console.log(`server running on localhost:${process.env.PORT}`)
})