require('dotenv').config();

const fetch = require("node-fetch").default;

module.exports = async function request() {
  const res = await fetch(`${process.env.HOST}${process.env.ENDPOINT_PATH}`)
  if (!res.ok) {
    throw new Error("api error");
  }
  return res.json();
}