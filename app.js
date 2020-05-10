const express= require('express');
const mongoose= require('mongoose');
const url= 'mongodb://127.0.0.1/userbox'
const userRouter = require("./routers/user");

const app=express();

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
})

const con=mongoose.connection
con.on('open',function(){
    console.log("Connected....");
})

app.use(express.json())
app.use('/api',userRouter)

app.listen(9000,()=>{
    console.log("server started")
});