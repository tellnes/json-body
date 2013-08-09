var fs = require('fs')
  , jsonBody = require('./')

var stream = fs.createReadStream(__dirname + '/package.json')

jsonBody(stream, function (err, body, stream) {
  if (err) throw err
  console.log(body)
})
