module.exports = {
  "*": ["npm run lint"],
  "src/**/*.{ts,tsx}": [
    "npm run tsc"
  ]
};