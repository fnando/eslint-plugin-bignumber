module.exports = {
  meta: {
    docs: {
      category: "Stylistic Issues",
      description: "Enforces use of BigNumber instead of parseFloat",
      recommended: true
    }
  },
  create(context) {
    return {
      Identifier(node) {
        if (node.name === "parseFloat") {
          context.report(node, "Do not use parseFloat");
        }
      }
    };
  }
};
