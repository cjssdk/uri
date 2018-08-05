URL string handler
==================

[![build status](https://img.shields.io/travis/cjssdk/uri.svg?style=flat-square)](https://travis-ci.org/cjssdk/uri)
[![npm version](https://img.shields.io/npm/v/cjs-uri.svg?style=flat-square)](https://www.npmjs.com/package/cjs-uri)
[![dependencies status](https://img.shields.io/david/cjssdk/uri.svg?style=flat-square)](https://david-dm.org/cjssdk/uri)
[![devDependencies status](https://img.shields.io/david/dev/cjssdk/uri.svg?style=flat-square)](https://david-dm.org/cjssdk/uri?type=dev)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-blue.svg?style=flat-square)](https://gitter.im/DarkPark/cjssdk)
[![RunKit](https://img.shields.io/badge/RunKit-try-yellow.svg?style=flat-square)](https://npm.runkit.com/cjs-uri)


Module to parse location URLs.


## Installation ##

```bash
npm install cjs-uri
```


## Usage ##

Add to the scope:

```js
var parse = require('cjs-uri').parse;
```

Parse current location:

```js
console.log(parse(document.location.href));
```


## Contribution ##

If you have any problems or suggestions please open an [issue](https://github.com/cjssdk/uri/issues)
according to the contribution [rules](.github/contributing.md).


## License ##

`cjs-uri` is released under the [MIT License](license.md).
