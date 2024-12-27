const express = require("express")
const app = express()
const cors = require("cors")
const usersRouter = require("./routes/usersRouter")
const authRouter = require("./routes/authRouter")
const messagesRouter = require("./routes/messagesRouter")
const PORT = 5000

// const http = require("http").Server(app)
// const socketIO = require("socket.io")(http,{
//     cors:{
//         origin: 'http://localhost:5173'
//     }
// })

app.use(cors())
app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api/auth",authRouter)
app.use("/api/messages",messagesRouter)


// socketIO.on("connection",(socket)=>{
//     console.log(`${socket.id} user connected`)
//     socket.on('message',(data)=>{
//         socketIO.emit('response', data)
//     })
//     socket.on("disconnect",()=>{
//         console.log(`${socket.id} disconnect`)
//     })
// })

app.listen(PORT,()=>{
    console.log("app started")
})
