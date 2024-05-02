const express= require('express');
const app= express();
const path = require('path')
app.use(express.static(path.join(__dirname, "public")));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})

app.listen(4500,()=>{
    console.log(`APP URL http://localhost:4500`)
})