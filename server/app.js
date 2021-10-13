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
    users.find({}).then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
    })
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
});
 
app.post('/delete',(req,res) => {
    users.findByIdAndRemove(req.body.id)
    .then(data => {
        console.log(data);
        res.send('deleted');
    }).catch(err=>{
        console.log(err);
    } )
})
 
app.post('/update-data',(req,res) => {
 
    users.findByIdAndUpdate(req.body.id, {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address,
        username:req.body.username,
        password:req.body.password,
    })
    .then(data=>{
        console.log(data);
        res.send('updated');
    }).catch(err=>{
        console.log(err);
    })
});

app.get('/usercheck', function(req, res) {
    users.findOne({username:req.body.username}, function(err, user){
        if(err) {
          console.log(err);
        }
        var message;
        if(user) {
          console.log(user)
            message = "user exists";
            console.log(message)
        } else {
            message= "user doesn't exist";
            console.log(message)
        }
        res.json({message: message});
    });
});
 
app.listen(3000,() => {
    console.log("server running");
})
