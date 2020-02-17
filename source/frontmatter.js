var yaml = require('js-yaml');

var pattern = /(^\/\*(?:\r\n|\r|\n)([\w\W]*?)\*\/(?:\r\n|\r|\n))?([\w\W]*)*/;

module.exports = function(string, opts) {
  opts = opts || {};

  var parsed = {
    data: null,
    content: ''
  };

  var matches = string.match(pattern);

  if (matches[2] !== undefined) {
    var parse = opts.safeLoad ? yaml.safeLoad : yaml.load;
    parsed.data = parse(matches[2]) || {};
  }

  if (matches[3] !== undefined) {
    parsed.content = matches[3];
  }

  return parsed;
};
