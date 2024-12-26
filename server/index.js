const express = require("express")
const app = express()
const usersRouter = require("./routes/usersRouter")
const authRouter = require("./routes/authRouter")
const PORT = 5000

const http = require("http").Server(app)
const cors = require("cors")
const socketIO = require("socket.io")(http,{
    cors:{
        origin: 'http://localhost:5173'
    }
})

app.get('api',(req,res)=>{
    res.json({
        message: "Hello"
    })
})
app.use(cors())
app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api/auth",authRouter)


socketIO.on("connection",(socket)=>{
    console.log(`${socket.id} user connected`)
    socket.on('message',(data)=>{
        socketIO.emit('response', data)
    })
    socket.on("disconnect",()=>{
        console.log(`${socket.id} disconnect`)
    })
})

http.listen(PORT,()=>{
    console.log("app started")
})
