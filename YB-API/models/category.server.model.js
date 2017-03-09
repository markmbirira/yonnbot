var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    User = mongoose.model('User');

var CategorySchema = new Schema({
  title: {
    type: String,
    index: true,
    required: 'title is required',
  },
  creator: { // DBRef to the creator
    type: String,
    default: "yonnbot"
  },
  color: {
    type: String,
    default: '#ccc'
  },
  created: {
    type: Date,
    dafault: Date.now
  },
  postCount: { // number of posts in category
    type: Number,
    default: 0
  } 
  
});

CategorySchema.set('toJSON', {
  getters: true,
  virtuals: true,
});

// No methods here

CategorySchema.statics.findCategoryById = function (id, callback) {
  this.findOne({ _id: id}, callback);
};


mongoose.model('Category', CategorySchema);

