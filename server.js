const express=require('express')
const app=express()
const port=process.env.port || 3000;


app.use(express.json())

const connectdb=require('./config/db')




app.listen(port,()=>{
    
    console.log(`server is running on the port ${port}`);
    
})