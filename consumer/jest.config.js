module.exports = {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(node-fetch|fetch-blob)/)"
  ]
};