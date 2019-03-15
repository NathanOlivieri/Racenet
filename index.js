let mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/racenetdata');
const userSchema = require('./src/Models/userSchema'),
      eventSchema = require('./src/Models/eventSchema');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

// var userSchema = new mongoose.Schema({
//     name: {
//         userName: String,
//         firstName: String,
//         lastName: String
//     },
//     upcomingEvents: Number,
//     pastEvents: Number,
//     dateJoined: String,
//     golds: Number,
//     goldEvents: Array,
//     silvers: Number,
//     silverEvents: Array,
//     bronzes: Number,
//     bronzeEvents: Array,
//     score: Number
// });

// userSchema.methods.userScore = () => {
//     let score = Math.abs((this.golds * 3) + 
//                         (this.silvers * 2) + 
//                         (this.bronzes))
//     console.log(score);
// }

let User = mongoose.model('User', userSchema);

let newUser = new User({ 
    name: {
        userName: '99takumi',
        firstName: 'test',
        lastName: 'Olivieri'
    },
    upcomingEvents: 102,
    pastEvents: 66,
    dateJoined: 'Sep 20 2019',
    golds: 10,
    goldEvents: ['eventid', 'eventid2'],
    silvers: 5,
    silverEvents: ['eventid', 'eventid2'],
    bronzes: 3,
    bronzeEvents: ['eventid', 'eventid2']
})

// console.log(firstuser);
//add doc to db using Schema

newUser.save(function (err, res) {
    if (err) return console.error(err);
    console.log(`User ${newUser.name.userName} created!`)
  });

// userFinder = () => {
// User.find(function (err, res) {
//     if (err) return console.error(err);
//     console.log(res);
//   })}

// userFinder();