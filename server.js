const express = require('express')
const app = express()
const dbConnect = require('./dbconnect')
const port = process.env.PORT || 5000
const userRouter = require('./routes/UserRoute')
const cors = require('cors');
const path = require('path')

app.use(express.json())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use('/api/user/', userRouter)

if(process.env.NODE_ENV === 'production'){
    app.use('/', express.static('client/build'))
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, "client/build/index.html"))
    })
}
app.get('/', (req,res) => {
    res.send("Hello welcome")
})

app.listen(port, () => console.log(`Listening on the port ${port}`))

