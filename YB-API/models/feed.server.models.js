var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = mongoose.model('User'),
    mongoosePaginate = require('mongoose-paginate');


var feedscrapper = require('../util/feedscrapper');

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
  embedly_data: Object,
  color: String,
  category: String,
  created: {
    type: Date,
    default: Date.now
  },
  // author: { // use Post.find().populate('author').exec(function(err, posts) {});
  //   type: Schema.ObjectId,
  //   ref: 'User'
  // },
  comments: Array,
  upvotes: {
    type: Number,
    default: 0
  },
  downvotes: {
    type: Number,
    default: 0
  }
});

PostSchema.plugin(mongoosePaginate);

PostSchema.set('toJSON', {
  getters: true,
  virtuals: true,
});


PostSchema.pre('save', function(next) {
  self = this;
  feedscrapper(this.url, function(data){
    data = JSON.stringify(eval("(" + data + ")"));
    data = JSON.parse(data);
    self.embedly_data = data; // save data received from EMBEDY API
    next();
  });

});

PostSchema.statics.findPostById = function (id, callback) {
  this.findOne({ _id: id}, callback);
};


mongoose.model('Post', PostSchema);

