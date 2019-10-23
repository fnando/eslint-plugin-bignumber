module.exports = {
  rules: {
    "no-parsefloat": require("./rules/no-parsefloat")
  },
  configs: {
    recommended: {
      rules: {
        "bignumber/no-parsefloat": "warn"
      }
    }
  }
};
