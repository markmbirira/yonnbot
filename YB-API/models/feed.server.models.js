var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    User = mongoose.model('User');

var PostSchema = new Schema({
  title: {
    type: String,
    index: true,
    required: 'title is required',
    validate: [
      function(title) {
        return title.length > 6;
      },
      'title should be atleast 6 characters'
    ]
  },
  url: {
    type: String,
    index: true,
    trim: true,
    set: function(url) {
      if (!url) {
        return url;
      } else {
        if (url.indexOf('http://') !== 0 && url.indexOf('https://') !==0) {
          url = 'http:\/\/' + url;
        }
        
        return url;
      }
    }
  },
  color: String,
  category: String,
  created: {
    type: Date,
    dafault: Date.now
  },
  // author: { // use Post.find().populate('author').exec(function(err, posts) {});
  //   type: Schema.ObjectId,
  //   ref: 'User'
  // },
  comment: Array
  
});

PostSchema.set('toJSON', {
  getters: true,
  virtuals: true,
});

PostSchema.methods.verifyLink = function (url) {
  var lurl = require('lurl');
  return lurl(url); // valid URL
}

PostSchema.statics.findPostById = function (id, callback) {
  this.findOne({ _id: id}, callback);
};


mongoose.model('Post', PostSchema);

