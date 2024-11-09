"use strict";

module.exports = cli;

const localApi = require("@devdocs/local-api");

function cli() {
  console.log(localApi());
  return "Hello from cli";
}

cli();
