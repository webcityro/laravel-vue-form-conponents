const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
	.sass('resources/sass/app.scss', 'public/css')
	.sass('resources/sass/editor.scss', 'public/css')
	.sourceMaps()
	.version();
