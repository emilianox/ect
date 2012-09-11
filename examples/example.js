var ECT = require('./../index');

var renderer = ECT({ root : __dirname + '/view', cache : true, ext : '.html' });

renderer.render('page', { title: 'Hello, World!' }, function(error, html) {
	console.log(error);
	console.log(html);
});
