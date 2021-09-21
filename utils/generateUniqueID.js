const generateUniqueID = (length = 4, seperator = '-') => {
  return (id = Array.from({ length: length }, () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  ).join(seperator));
};

module.exports = generateUniqueID;
