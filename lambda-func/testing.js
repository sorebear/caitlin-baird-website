var beautify = require('js-beautify');

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: `Hello, World! Look at this EVENT: ${beautify(event)} and don't forget the CONTEXt: ${beautify(context)}`
  })
}