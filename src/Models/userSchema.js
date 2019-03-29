const mongoose = require('mongoose'),
 Schema = mongoose.Schema;
 ObjectId = Schema.Types.ObjectId

var userSchema = new Schema({
    _id: {type:ObjectId, auto:true},
    name: {
        type: String,
        required: true,
        unique: true
    },
    location: {
      country: String,
      city: String,
    },
    description: {
      type: String
    },
    dateJoined: {
          type:Date,
          default:Date.now
        },
    events:[{
      type: ObjectId,
      ref: 'Event'
    }],
    golds:{
      type: Number,
      default: 0
    },
    silvers: {
      type: Number,
      default: 0
    },
    bronzes: {
      type: Number,
      default: 0
    },
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
// userSchema.methods.userScore = () => {
//     let score = Math.abs((this.golds * 3) + 
//                         (this.silvers * 2) + 
//                         (this.bronzes))
//     console.log(score);
// }
const User = mongoose.model('User', userSchema);
module.exports = User;