/**
 * @license The MIT License (MIT)
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 */

'use strict';


/**
 * URL parsing tool.
 *
 * @license The MIT License (MIT)
 * @copyright Steven Levithan <stevenlevithan.com>
 *
 * @param {string} str string to parse
 *
 * @return {Object.<string, string>} result data
 */
function parseUri ( str ) {
    var options = parseUri.options,
        matched = options.parser[options.strictMode ? 'strict' : 'loose'].exec(str),
        uri     = {},
        index   = 14;

    while ( index-- ) {
        uri[options.key[index]] = matched[index] || '';
    }

    uri[options.q.name] = {};

    /* eslint no-unused-vars: 0 */
    uri[options.key[12]].replace(options.q.parser, function ( $0, $1, $2 ) {
        if ( $1 ) { uri[options.q.name][$1] = $2; }
    });

    return uri;
}

parseUri.options = {
    strictMode: false,
    key: [
        'source',
        'protocol',
        'authority',
        'userInfo',
        'user',
        'password',
        'host',
        'port',
        'relative',
        'path',
        'directory',
        'file',
        'query',
        'anchor'
    ],
    q: {
        name: 'queryKey',
        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
    },
    parser: {
        // eslint-disable-next-line
        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
        // eslint-disable-next-line
        loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
};


// public
module.exports = {
    parse: parseUri
};
