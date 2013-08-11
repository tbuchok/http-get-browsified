var http = require('http')
;

http.get('http://www.cnn.com', function(res) {
  console.log(res.statusCode);
});