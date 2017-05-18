var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: 'username is required',
    trim: true
  },
  password: {
    type: String,
    required: 'username is required',
    validate: [
      function(password) {
        return password && password.length > 6;
      },
      'password must be longer than 6 chars'
    ]
  },
  email: String,
  role: {
    type: String, // admin, moderator, member
    default: 'member'
  },
  karma: Number,
  salt: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre('save', function (next) {
  var user = this;
    if (this.isModified('password') || this.isNew) {
      bcrypt.genSalt(10, function (err, salt) {
        if (err) {
          return next(err);
        }
        user.salt = salt;
        bcrypt.hash(user.password, salt, function (err, hash) {
          if (err) {
            return next(err);
          }
          user.password = hash;
          next();
        });
      });
    } else {
    return next();
  }
});

UserSchema.methods.comparePassword = function (passw, fn) {
  bcrypt.compare(passw, this.password, function (err, isMatch) {
    if (err) {
      return fn(err);
    }
    fn(null, isMatch);
  });
};

UserSchema.set('toJSON', {
  getters: true,
  virtuals: true
});

mongoose.model('User', UserSchema);
