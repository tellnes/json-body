
module.exports = function (stream, cb) {
  var body = []

  function ondata(chunk) {
    body.push(chunk)
  }
  function onend() {
    cleanup()

    try {
      body = JSON.parse(body.join(''))
    } catch (err) {
      return cb(err, null, stream)
    }

    cb(null, body, stream)
  }
  function onerror(err) {
    cleanup()
    cb(err, null, stream)
  }
  function cleanup() {
    stream.removeListener('data', ondata)
    stream.removeListener('end', onend)
    stream.removeListener('error', onerror)
  }
  stream.on('data', ondata)
  stream.on('end', onend)
  stream.on('error', onerror)
}
