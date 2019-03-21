const mongoose = require('mongoose');
const User = require('./src/Models/userSchema'),
      Event = require('./src/Models/eventSchema'),
      express = require('express'),
      app = express(),
      PORT = 8080,
      bodyParser = require('body-parser'),
      cors = require('cors');

mongoose.connect('mongodb://localhost/racenetdata');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.static('src/public'));

//GETREQ--SingleUserObject
app.get('/users/:id', (req, res)=>{
  let uid = req.params.id
  User.findById(uid)
    .populate("events")
  .then(usr => {
      res.json(usr);
  })
  .catch(err => {
      console.log(err)
  })
});
//GETREQ--Allusers
app.get('/users', (req, res)=>{
  User.find({})
    .populate("events")
  .then(usr => {
      res.json(usr);
  })
  .catch(err => {
      console.log(err)
  })
});
//POST--newUser
app.post('/users', (req, res)=>{
  User.create(req.body).then((user) => {
    res.send(user)
  })
  .catch(err => {
    console.log(err)
  })
});

//----------------------------Eventsreqs-----------------------------------------
//POST--newEvent
app.post('/events', (req, res) => {
  Event.create(req.body).then((event) => {
    res.send(event)
  })
  .catch(err =>{
    console.log(err)
  })
})
//GETREQ--AllEvents
app.get('/events', (req, res)=>{
  Event.find({})
    .populate("attending")
  .then(evt => {
      res.json(evt);
  })
  .catch(err => {
      console.log(err)
  })
});

//GETREQ--SingleEventObject
app.get('/events/:id', (req, res)=>{
  let eid = req.params.id
  Event.findById(eid)
    .populate("attending")
  .then(evn => {
      res.json(evn);
  })
  .catch(err => {
      console.log(err)
  })
});




//onlyeabove^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
app.listen(PORT, () => {
  console.log(`server listening on PORT ${PORT}`)
})