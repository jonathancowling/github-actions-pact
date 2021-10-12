require('dotenv');

const fetch = require("node-fetch").default;

module.exports = async function request() {
  const res = await fetch("http://localhost:8080/endpoint")
  if (!res.ok) {
    throw new Error("api error");
  }
  return res.json();
}