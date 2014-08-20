Handlebars gulper plugin
===================

A [gulper](https://github.com/PaulAvery/node-gulper) plugin to include handlebars templates:

``` js
var hbs = require('gulper-handlebars');
var gulper = new require('gulper')(config)

gulper.plugin(hbs(glob, namespace));
```