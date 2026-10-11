const express = require("express")
const fs = require("fs")
const dateformat = require("dateformat")

var books = require("./Books")
var computers = require("./Computers")


const app = express()
const router = express.Router()


let writeData = (data) => {
    data += "\n"
    fs.appendFile("server_log.txt", data, function(error){
        if(error){
            throw error
        }
        console.log('Log Saved')
    })
}

// Middleware function
let logger = (req, res, next) => {
    const todays= dateformat(Date(), "dddd, mmmm, dS,yyyy, h:MM:ss:TT")
    let data = `[${todays} - ${req.originalUrl}]`
    writeData(data)
    next()
}

app.use(logger)

let booksLogger = (req, res, next) => {
    console.log("books Logger was called")
    next()
}

app.use(booksLogger)
app.use('/books/computers', computers)
app.use('/books',booksLogger, books)

app.listen(process.env.PORT || 8081)
console.log(`web server is listening at ${process.env.PORT  || 8081}`)

