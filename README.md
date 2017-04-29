# Sass Colour Themes

This contains a base example of how to build an object using sass and utilise the object key value loop in order to create multiple colour variations of the same component, page or website, where the hex value is the variable that changes.

It has been built to work with a `data-theme` data attribute so that it doesn't get confused with any other classes and makes it more readable. 

## The build supplies the following

*. Gulp `watch` setup for reading and compiling the SASS directory. 
  * Using `gulp-sass` for the compiling
  * Included `gulp-sourcemaps` to embed inline sourcemaps within the compiled `main.css` file
*. Reset stylesheet by [Meyer Web](https://meyerweb.com/eric/tools/css/reset/) (with a few tweaks).
*. A Read more component which is being used to illustrate the colour theme setup.

## To get Started

1. Install [NodeJS](https://nodejs.org/en/) on your machine (Globally) 
2. Clone this repo (or download directly).
3. Open the command line of your choice and cd to the root directory of this repo on your machine.
4. Install Gulp globally by running `npm install -g gulp` in your terminal window
5. Now that you have NodeJS installed, you can run `npm install`. This will read the `package.json file and install all required dependencies.
6. To initiate the SASS gulp function, entering `gulp watch` in the project root will fire it up in your terminal window. 

> **NOTE**: Gulp.watch is used typically for small projects, and so the watch function doesn't recognise when SASS files are added or deleted. The terminal process running the gulp task has to be restarted to pick up any new SASS files. 


