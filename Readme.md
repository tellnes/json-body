# JSON Body

Concat stream and parse JSON

## Example

```js
var fs = require('fs')
  , jsonBody = require('./')

var stream = fs.createReadStream(__dirname + '/package.json')

jsonBody(stream, function (err, body, stream) {
  if (err) throw err
  console.log(body)
})
list.pipe(process.stdout)
```

## Install

    $ npm install json-body

## License

MIT
