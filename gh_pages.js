var ghpages = require('gh-pages');
var path = require('path');

// I think our dirname is going to be 'public' when we deploy

ghpages.publish(path.join(__dirname, 'dist'), {
  repo: 'https://github.com/newswim/greenfin_blog.git'},
  function(err) { ... });
