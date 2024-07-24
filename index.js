const express= require('express');
const app= express();
const connectDB= require('./database_connection/db.js');
const User=require('./models/user.js');

const bodyparser=require('body-parser');
const cors= require('cors');
const signup=require('./routers/signup.js')
const dashboard=require('./routers/dashboard.js')
const login=require('./routers/login.js')
const PORT= process.env.PORT
app.use(bodyparser.json());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());
app.get('/',(req,res)=>{
    res.send("HomePage");

})
app.use('/login',login);

app.use('/signup',signup);
app.use('/dashboard',dashboard);

// app.post('/login',(req,res)=>{
//     res.send('login succes')
// })
// app.post('/signup',async(req,res)=>{
//     try {
//         const data =await req.body;
//         const newUSer= new User(data);
//         const response=  await newUSer.save();
//         console.log("data saved");
//         res.status(200).json(response); 
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({error:'Inter sever Error'})
//     }
// })

app.listen(8000,()=>{
    console.log('server is running');
})

connectDB();