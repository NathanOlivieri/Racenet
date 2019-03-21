const mongoose = require('mongoose'),
 Schema = mongoose.Schema;
 ObjectId = Schema.Types.ObjectId

let eventSchema = new Schema({
    _id: {type:ObjectId, auto:true},
    name: {
        type: String,
        required: true,
    },
    location: {
      location: String,
      venue: String,
      venueAbrev: {type:String}
    },
    dateCreated: {
          type:Date,
          default:Date.now
        },
    eventYear: {
        type: Number,
        required: true
    },
    eventMonth: {
        type: Number,
        required: true
    },
    eventDay: {
      type: Number,
      required: true
  },
    eventType: {
      type: String,
      default: 'Timed Event - Random'
    },
    contact:{
      type: String,
    },
    //NAIIICE
    attending:[{
      type: ObjectId,
      ref: 'User'
    }],
    //NAIIIICE
    pictures: {
      type: Array,
      default: ['https://source.unsplash.com/100x100/?ferrari',
      'https://source.unsplash.com/100x100/?porsche',
      'https://source.unsplash.com/100x100/?ferrari',
      'https://source.unsplash.com/100x100/?86',
      'https://source.unsplash.com/100x100/?racecar',
      'https://source.unsplash.com/100x100/?lambo',
      'https://source.unsplash.com/100x100/?mountain, road',
      'https://source.unsplash.com/100x100/?subaru',
      'https://source.unsplash.com/100x100/?nissan']
    },
    videos: {
      type: Array
    }
  });

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;