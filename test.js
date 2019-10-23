const RuleTester = require("eslint").RuleTester;
const rule = require("./lib/rules/no-parsefloat");
const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2018
  }
});

ruleTester.run("no-parsefloat", rule, {
  valid: [{ code: `const amount = new BigNumber("1234.56");` }],
  invalid: [
    {
      code: `const amount = parseFloat("1234.56");`,
      errors: [{ message: "Do not use parseFloat" }]
    }
  ]
});
