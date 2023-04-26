const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */


//  mix.css('resources/css/master.css', 'public/css/master.css')

 mix.ts('resources/ts/app.ts', 'public/js').vue();

mix.options({
    hmrOptions: {
        host: process.env.APP_URL,  // edulms.test is my local domain used for testing
        port: 8080,
    }
 });
