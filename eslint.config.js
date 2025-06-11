import eslintPluginAstro from "eslint-plugin-astro";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],
  {
    rules: {},
  },
];
