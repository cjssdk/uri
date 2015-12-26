URL string parser
=================

[![NPM version](https://img.shields.io/npm/v/cjs-parse-uri.svg?style=flat-square)](https://www.npmjs.com/package/cjs-parse-uri)
[![Dependencies Status](https://img.shields.io/david/cjssdk/parse-uri.svg?style=flat-square)](https://david-dm.org/cjssdk/parse-uri)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-blue.svg?style=flat-square)](https://gitter.im/DarkPark/cjssdk)


Module to parse location URLs.


## Installation

```bash
npm install cjs-parse-uri
```


## Usage

Add to the scope:

```js
var parseUri = require('cjs-parse-uri');
```

Parse current location:

```js
console.log(parseUri(document.location));
```


## Debug mode

> There is a global var `DEBUG` which activates additional consistency checks and protection logic not available in release mode.


## Contribution

If you have any problem or suggestion please open an issue [here](https://github.com/cjssdk/parse-uri/issues).
Pull requests are welcomed with respect to the [JavaScript Code Style](https://github.com/DarkPark/jscs).


## License

`cjs-parse-uri` is released under the [GPL-3.0 License](http://opensource.org/licenses/GPL-3.0).
