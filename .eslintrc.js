module.exports = {
  root: true,
  extends: '@react-native-community',
  extends: ['plugin:@typescript-eslint/stylistic'],
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended'],
  "rules": {
    // Note: you must disable the base rule as it can report incorrect errors
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "error"
  }
};
