
// code to create server using mongoose and express
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
 
 
app.use(bodyParser.json());
 
require('./users');
 
// connecting to the mongoose database using users key
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
 
// endpoint for fetching all users data 
app.get('/',(req,res) => {
    users.find({}).then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
    })
})
 
// endpoint to insert user record in database 
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
        message = 'created';
        res.json({status: message});
    }).catch(err=>{
        message = 'not created';
        console.log(err);
        res.json({status: message});
    })
});
 
// endpoint to delete user 
app.post('/delete',(req,res) => {
    users.findByIdAndRemove(req.body.id)
    .then(data => {
        console.log(data);
        res.send('deleted');
    }).catch(err=>{
        console.log(err);
    } )
})
 
// endpoint to update user 
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

// endpoint for the email and user validation for login screen 
app.post('/usercheck', function(req, res) {
    users.findOne({username:req.body.username, password:req.body.password}, function(err, user){
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
