URL string parser
=================

[![NPM version](https://img.shields.io/npm/v/stb-util-parse-uri.svg?style=flat-square)](https://www.npmjs.com/package/stb-util-parse-uri)
[![Dependencies Status](https://img.shields.io/david/stbsdk/util-parse-uri.svg?style=flat-square)](https://david-dm.org/stbsdk/util-parse-uri)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-blue.svg?style=flat-square)](https://gitter.im/DarkPark/stb)


`stb-util-parse-uri` is a module to parse location URLs.


## Installation

```bash
npm install stb-util-parse-uri
```


## Usage

Add to the scope:

```js
var parseUri = require('stb-util-parse-uri');
```

Parse current location:

```js
console.log(parseUri(document.location));
```


## Debug mode

> There is a global var `DEBUG` which activates additional consistency checks and protection logic not available in release mode.

In debug mode the util method is exposed to the global namespace as `window.utilParseUri`.


## Contribution

If you have any problem or suggestion please open an issue [here](https://github.com/stbsdk/util-parse-uri/issues).
Pull requests are welcomed with respect to the [JavaScript Code Style](https://github.com/DarkPark/jscs).


## License

`stb-util-parse-uri` is released under the [GPL-3.0 License](http://opensource.org/licenses/GPL-3.0).
