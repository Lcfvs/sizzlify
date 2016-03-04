/* eslint-env node */

void function() {
    'use strict';
   
    var
    hack,
    sizzle,
    source;
    
    hack = 'var window;\
    \
    window = {\
        document: new (require("xmldom").DOMParser)()\
        .parseFromString("<html></html>", "text/html")\
    };';
    
    sizzle = require('fs').readFileSync(require.resolve('sizzle'));
    source = `${hack}${sizzle}`;
    
    module._compile(source, __filename);
}();