var embedly = require('embedly'),
    util = require('util');
    axios = require('axios');

var API_KEY = '93b0f5b7d4e945e29e255f9576937340';

var api = new embedly({key: API_KEY});

var url = ('http://www.guardian.co.uk/media/2011/jan' +
            '/21/andy-coulson-phone-hacking-statement');


function feedscrapper(url, fn){
  api.oembed({url: url}, function(err, objs) {
    if (!!err) {
      console.error('request #1 failed');
      console.error(err.stack, objs);
      return;
    }
    // console.log(util.inspect(objs[0]));
    fn(util.inspect(objs[0]));
  });
}

module.exports = feedscrapper;







