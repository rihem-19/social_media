const express = require('express')
const connectdb=require('./db')
const app = express();
connectdb();
app.get('/',(req, res)=>res.send('api running !'))
app.use('/api/users',require('./routes/api/users'))
//app.use(express.json())
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))