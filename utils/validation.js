function isRequired(input) {
  return input === "" ? "value is required" : true;
}

module.exports = {
  isRequired,
};
