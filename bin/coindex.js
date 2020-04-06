#!/usr/bin/env node

const program = require("commander");
const packageJson = require("../package.json");

program
  .version(packageJson.version)
  .command("key", "API key https://nomics.com")
  .command("check", "Check the price info")
  .parse(process.argv);
