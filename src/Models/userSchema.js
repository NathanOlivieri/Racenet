let mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: {
        userName: String,
        firstName: String,
        lastName: String
    },
    upcomingEvents: Number,
    pastEvents: Number,
    dateJoined: Date.now,
    golds: Number,
    goldEvents: Array,
    silvers: Number,
    silverEvents: Array,
    bronzes: Number,
    bronzeEvents: Array,
    score: Number
  });

module.exports = mongoose.model('Users', userSchema)