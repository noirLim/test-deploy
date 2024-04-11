const express = require('express');
const cors = require('cors')
require("./config/dbConfig.js")

const app = express()

var corOptions = {
    origin:"https://localhost:8080"
}

// cor options harus ditambahkan buat keamanan nantinya
//middleware
app.use(cors())
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))

//testing api

app.get('/',(req,res) =>{
    res.json({message:"Hello from api"})
})

//router api
const stockRouter = require("./routes/stockRouter.js")

app.use('/api/stockRouter/',stockRouter)

const PORT = process.env.PORT || 8080

//listen server
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})