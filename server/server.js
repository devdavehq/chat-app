import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import bcrypt from 'bcrypt'
import cors from 'cors'
import { html } from 'lit-html'
import { v4 as uuid } from 'uuid'
// const { v4: uuidv4 }  = require('uuid')
const app = express()
import mongoose from 'mongoose'
import session from 'express-session'
import multer from 'multer'
const PORT = process.env.PORT || 2099

import dotenv from 'dotenv'
dotenv.config()
app.use(cors())
app.use(bodyParser.urlencoded( { extended: true } ))
app.use(bodyParser.json())

app.use(session({
    secret: uuid(),
    resave: false,
    saveUninitialized: true
}))

const MONGO_URI = 'mongodb+srv://devduoHQ:deevHQ@cluster0.hltxsqm.mongodb.net/chat_app?retryWrites=true&w=majority'

// mongoose.connect(process.env.URI || MONGO_URI , { useNewUrlParser : true, useUnifiedTopology : true})
// .then((res)=> app.listen(PORT, () => console.log(`app listening on port http://localhost:${PORT}`)))
// .catch(err=>console.log(`> Error while connecting to mongoDB : ${err.message}`))


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(PORT, () => console.log(`app listening on port http://localhost:${PORT}`))

