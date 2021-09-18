const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


app.use(bodyParser.json());

require('./users');

const users = mongoose.model('users');
const mongouri = "mongodb+srv://man:5QzrRih2ql24zuxx@cluster0.ndyna.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(mongouri, {
    useNewUrlParser: true
});

mongoose.connection.on("connected", () => {
    console.log("connected on mongo");
});

mongoose.connection.on("err",(err)=> {
    console.log("error", err); 
})

app.get('/',(req,res) => {
    res.send('welcome to node js');
})

app.post('/send-data',(req,res) => {
    const userTable = new users({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address,
        username:req.body.username,
        password:req.body.password,
    });
    userTable.save()
    .then(data => {
        console.log(data);
        res.send('posted');
    }).catch(err=>{
        console.log(err);
    })
})

app.get('/receive-data',(req,res) => {
    const userTable = new users({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address,
        username:req.body.username,
        password:req.body.password,
    });
    userTable.save()
    .then(data => {
        console.log(data);
        res.send('posted');
    }).catch(err=>{
        console.log(err);
    })
})

app.listen(3000,() => {
    console.log("server running");
})