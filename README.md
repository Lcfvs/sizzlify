# sizzlify
[![npm](https://img.shields.io/npm/v/sizzlify.svg?style=plastic)]()
[![Downloads](https://img.shields.io/npm/dt/sizzlify.svg?style=plastic)]()

A mini hack to embed Sizzle in nodejs, under the MIT licence

## Install
`npm install sizzlify`

## Usage
```JS
var
sizzlify,
xmldom,
document;

sizzlify = require('sizzlify');
xmldom = require('xmldom');

document = xmldom.parseFromString(`<!DOCTYPE html><html><body></body></html>`);

sizzlify('html > body', document);
```
