const http = require("http")
const express  = require("express")
const path = require("path")
app = express()

app.get("/api/products", (req,res)=>{
    res.sendFile(path.join(__dirname,"./views","view.html"))
})

const server = http.createServer(app)
server.listen(2000)