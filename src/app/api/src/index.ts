const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config();

const router = express.Router()

const App = express()
const PORT = process.env.PORT || 8000;

//middleware
App.use(express.json())
//App.use('/api', APIrouter)

//connect to db
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connected to MongoDB")).catch((error: any) => console.log(error ))

App.listen(PORT, () => console.log("Server listening on port " + PORT));