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
 * @param {string} uri - string to parse
 *
 * @return {Object.<string, string>} result data
 */
function parseUri ( uri ) {
    var options  = parseUri.options,
        matched  = options.parser[options.strictMode ? 'strict' : 'loose'].exec(uri),
        uriParts = {},
        index    = 14;

    while ( index-- ) {
        uriParts[options.key[index]] = matched[index] || '';
    }

    uriParts[options.q.name] = {};

    /* eslint no-unused-vars: 0 */
    uriParts[options.key[12]].replace(options.q.parser, function ( $0, $1, $2 ) {
        if ( $1 ) { uriParts[options.q.name][$1] = $2; }
    });

    return uriParts;
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
