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
const Run= require('./routers/Run.js');
const TestCase= require('./routers/TestCase.js');
const CheckTestCase=require('./routers/CheckTestCases.js')
const UserRoute=require('./routers/User.js');
const ProfileRoute= require('./routers/Profile.js');
const Profile = require('./models/Profile.js');
const PORT= process.env.PORT||8000;
app.use(bodyparser.json());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());
app.get('/',(req,res)=>{
    res.send("HomePage");

})





app.use('/login',login);

app.use('/signup',signup);
app.use('/Problems',Problem)
app.use('/dashboard',dashboard);
app.use('/run',Run);
app.use('/Testcases',TestCase);
app.use('/CheckTestCases',CheckTestCase);
app.use('/User',UserRoute);
app.use('/Profile',ProfileRoute);

app.listen(8000,()=>{
    console.log('server is running');
})

connectDB();