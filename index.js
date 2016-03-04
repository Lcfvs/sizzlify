/*
Copyright MIT 2016 Lcf.vs
https://github.com/Lcfvs/form.cheats
*/
void function() {
    'use strict';

    var
    hack,
    sizzle;

    hack = 'var window;\
    \
    window = {\
        document: new (require("xmldom").DOMParser)()\
        .parseFromString("<html></html>", "text/html")\
    };';

    sizzle = require('fs').readFileSync(require.resolve('sizzle'));

    module._compile(hack + sizzle, __filename);
}();