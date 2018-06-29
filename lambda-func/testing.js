exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: `Hello, World! Look at this EVENT: ${event} and don't forget the CONTEXt: ${context}`
  })
}