const express = require("express")
const app = express()
const cors = require("cors")
const usersRouter = require("./routes/usersRouter")
const authRouter = require("./routes/authRouter")
const messagesRouter = require("./routes/messagesRouter")
const summarizeRouter = require("./routes/summarizeRouter")
const path = require("path");
const PORT = 5000

app.use(cors())
app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api/auth",authRouter)
app.use("/api/messages",messagesRouter)
app.use("/api/summarize", summarizeRouter)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(PORT,()=>{
    console.log("app started")
})
