var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  User = mongoose.model('User'),
  mongoosePaginate = require('mongoose-paginate')
  moment = require('moment');

var feedscrapper = require('../util/feedscrapper');

var PostSchema = new Schema({
  title: {
    type: String,
    index: true,
    trim: true,
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
  tags: {
    type: Array,
    default: []
  },
  created: {
    type: Date,
    default: Date.now
  },
  slug: String,
  author_id: String,
  upvotes: {
    type: Number,
    default: 0
  },
  comments: {
    type: Object,
    default: {}
  }
});

PostSchema.plugin(mongoosePaginate);

PostSchema.set('toJSON', {
  getters: true,
  virtuals: true,
});


PostSchema.pre('save', function(next){
  this.slug = slugify(this.title);
  next();
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

PostSchema.virtual('slug_url').get(function() {
    var date = moment(this.created)
      , formatted = date.format('YYYY[/]MM[/]');
    // formatted results in the format 'YYYY/MM/'
    return this._id + '/' + this.slug;
  });

function slugify(title) {
  return title.toString().toLowerCase()
    .replace(/\s+/g, '-')        // Replace spaces with -
    .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
    .replace(/\-\-+/g, '-')      // Replace multiple - with single -
    .replace(/^-+/, '')          // Trim - from start of text
    .replace(/-+$/, '');         // Trim - from end of text
}

mongoose.model('Post', PostSchema);

