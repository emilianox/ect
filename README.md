# ECT

CoffeeScript template engine. Backward compatible with [eco](https://github.com/sstephenson/eco).

## Installation

	npm install ect

## Features

  * Caching templates
  * Automatic reloading of changed templates
  * CoffeeScript code in templates
  * Supports tag customization
  * Node.JS and client-side support
  * Powerful but simple syntax
  * Inheritance, partials, blocks

## Usage

```js
var ECT = require('ect');

var renderer = ECT({ root : __dirname + '/view', cache : true, ext : '.ect' });

renderer.render('page', { title: 'Hello, World!' }, function(error, html) {
	console.log(error);
	console.log(html);
});
```

You may use JavaScript object as root.

```js
var ECT = require('ect');

var renderer = ECT({ root : {
				layout: '<html><head><title><%- title %></title></head><body><% content %></body></html>',
				page: '<% extend "layout" %><p>Page content</p>'
				}, cache : true
			});

renderer.render('page', { title: 'Hello, World!' }, function(error, html) {
	console.log(error);
	console.log(html);
});
```

You can [play with demo](http://ectjs.com) to check all features.

## Syntax

### Unescaped output

```
<%- someVar %>
```

### Escaped output

```
<%= someVar %>
```

### CoffeeScript code

```
<% for article in @articles : %>
	<% partial 'article', { article: article } %>
<% end %>
```

or

```
<% if @user?.authenticated : %>
	<% partial 'partials/user' %>
<% else : %>
	<% partial 'partials/auth' %>
<% end %>
```

### Inheritance

```
<% extend 'layout' %>
```
or 

```
<% extend 'layout', { customVar: 'Hello, World!' } %>
```

Use


```
<% content %>
```

in parent template to define the insertion point.

### Partials

```
<% partial 'partial' %>
```

or

```
<% partial 'partial', { customVar: 'Hello, World!' } %>
```

### Blocks

```
<% block 'blockName' : %>
	<p>This is block content</p>
<% end %>
```

Use


```
<% content 'blockName' %>
```

in parent template to define the insertion point.

Blocks supports more than one level of inheritance and may be redefined.

## Options

  - `root`            Templates root folder or JavaScript object containing templates
  - `ext`             Extension of templates, defaulting to '' (not used for JavaScript objects as root)
  - `cache`           Compiled functions are cached, defaulting to false
  - `watch`           Automatic reloading of changed templates, defaulting to false (useful for debugging with enabled cache, not supported for client-side)
  - `open`            Open tag, defaulting to '<%'
  - `close`           Closing tag, defaulting to '%>'

## Client-side support

Basically, include [coffee-script.js](https://github.com/jashkenas/coffee-script/blob/master/extras/coffee-script.js) and [ect.min.js](https://github.com/baryshev/ect/tree/master/ect.min.js) to a page and ect ready to use.

```js
var renderer = ECT({ root : 'view', cache : true });

renderer.render('page', { title: 'Hello, World!' }, function(error, html) {
	console.log(error);
	console.log(html);
});
```

NOTE: root folder must be on the same domain to avoid cross-domain restrictions.

## License 

(The MIT License)

Copyright (c) 2012 Vadim M. Baryshev &lt;vadimbaryshev@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
