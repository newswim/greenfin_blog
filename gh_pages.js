var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, 'public'), {
  repo: 'https://github.com/newswim/greenfin_blog.git'},
  function(err) { ... });
