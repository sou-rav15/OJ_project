const express= require('express');
const app= express();
const connectDB= require('./database_connection/db.js');
const User=require('./models/user.js');

const bodyparser=require('body-parser');
const cors= require('cors');
const signup=require('./routers/signup.js')
const dashboard=require('./routers/dashboard.js')
const login=require('./routers/login.js')
const Problem= require('./routers/Problems.js');
// const Problems = require('./models/Problems.js');
const Run= require('./routers/Run.js')
const PORT= process.env.PORT
app.use(bodyparser.json());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());
app.get('/run',(req,res)=>{
    res.send("HomePage");

})


// app.post('/Problems',async (req,res)=>{
//     console.log(req.body);
//     try {
//     const data=req.body;
//     const newProblem= new Problems(data);
//     const response =await newProblem.save()
// res.status(200).json(response);
// } catch (error) {
//     console.log(error);
//     res.status(200).json({error:"Internal server errro during storing problens"})
    
// }

// });
// app.post('/',(req,res)=>{
//     try {
//         res.send('het')
//     } catch (error) {
//           res.send("oops")
//     }
  
// })
app.use('/login',login);

app.use('/signup',signup);
app.use('/Problems',Problem)
app.use('/dashboard',dashboard);
app.use('/run',Run)
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