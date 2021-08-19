const defaultOptions = {
  limit: 250,
  endWith: '...',
};
module.exports = (str, options = defaultOptions) => {
  if (str.length > options.limit) {
    str = str.substring(0, options.limit);
    str = str.substring(0, Math.min(prev.length, prev.lastIndexOf(' '))) + options.endWith;
  }
  return str;
};
