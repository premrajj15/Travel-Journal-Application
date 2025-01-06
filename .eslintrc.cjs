module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    // 'rules: react/prop-types": "off',(=> here also we can mention the rule name and the value need to mention the rule name and value  for "the missing in props validation error" and it will ignore that eslint errors)
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    //here below line is for the rule name and the value but here need to mention the rule value only for the "missing in props validation error" and it will ignore that eslint errors
    "react/prop-types": "off",
    "no-unused-vars": "off",
    "react-refresh/only-export-components": [
      "off",
      { allowConstantExport: true },
    ],
  },
};
