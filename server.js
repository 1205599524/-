const express=require ('express');
var session=require('express-session')
const mongoose=require("mongoose");
const users=require("./routers/api/users");
const profiles=require("./routers/api/profile");
const bodyParser=require("body-parser");
// const passport=require('passport')
mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true })
.then(()=>console.log("connect success"))
.catch(()=>console.log("connert error"))
const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(session({
    secret: 'itcast',
    resave: false,
    saveUninitialized: false,
    name:"token"
}))
// app.use(passport.initialize());

// require('./config/passport')(passport);

app.get('/',(req,res)=>{
    res.send('hello world');
})
app.use(users)
app.use(profiles)
app.listen(5000,()=>{
    console.log('server is running')
})