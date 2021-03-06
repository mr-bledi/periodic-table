periodic-table
==============

A simple HTML/CSS Periodic Table that uses JSON to load information regarding elements when you click on them.

## How does it work?

The project uses pure JavaScript and CSS (I've tried to avoid weighty frameworks/addons for this project), the `index.html` file contains the base HTML for the periodic table, `default.js` file the in the `js` folder setups the event listeners for each element in the periodic table, when an element is clicked a new JavaScript object is created, said object is defined in the `element.js` file which is also in the `js` directory.

All of the information loaded by the `element.js` file is stored as json in the `element` folder, I've generated these json files from a MySQL database, you can find a dump of this database in the `element` folder too, it's called `periodta_periodictable.sql`, if want to set this database up you can convert it into the required json files using the `generator.php` file found in the `element` folder, this file is messy and hideous beyond belief, but I've not spent much time putting it together and it (just about) achieves what is required of it.

There are lots of things I know can be improved, some of which are due to the long life of this project (some of this code dates back to 2011). Some of these goals include:

  - Refactoring the CSS/HTML
  - Refactoring the JavaScript
  - Changing the MySQL database to a NoSQL database and using node.js to create an api as opposed to getting information from generated json files
  - Creating different views that can be switched between enabling users to view more/less information at once.
  - Improving the Canvas visualisation
  - Improving the basic description of all elements
  - PWA functionality

I've also included the GruntFile I'm using on this project, although it should work as-is without you needing to use this.

It should be noted that if you want to set this up on your local machine, you'll need host it via WAMP/LAMP or something similar. You'll need to run `npm install`, and then `grunt build`, after that you'll need to set the webroot to the `dist` directory. `element.js` is set by default to request json files from `http://periodic-table.localhost/element/number.js` although you can host it via a different name and simply change the reference in this file. After any subsequent CSS/JavaScript changes, you'll need to run `grunt build` again.

I'd also like to hope that this project is a good place to start if you want to ease yourself into learning a little bit about JavaScript/Json, the code I've written definitely isn't as good as it could be, but I'm hoping that will improve in the not-too-distant future. When I'm happy with the quality of the code I'm hoping to package this up so it's easier to come at this from a beginners standpoint (maybe with an accompanying website).

## URLs

* Local Development URL: http://periodic-table.localhost/
* Live URL: http://periodic-table.co/
