const express = require('express')
const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
    res.send('Hello World! Your API is live')
})

app.get('/api/data',(req,res)=>{
    res.json({message:'Here is your data',data:[1,2,3]})
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})